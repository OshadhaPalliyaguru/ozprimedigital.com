"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import Matter from "matter-js";

interface PhysicsContextType {
    registerElement: (id: string, element: HTMLElement, options?: Matter.IBodyDefinition) => void;
    unregisterElement: (id: string) => void;
    enableGravity: () => void;
    isGravityEnabled: boolean;
}

const PhysicsContext = createContext<PhysicsContextType | null>(null);

export const usePhysics = () => {
    const context = useContext(PhysicsContext);
    if (!context) {
        throw new Error("usePhysics must be used within a PhysicsScene");
    }
    return context;
};

export default function PhysicsScene({ children }: { children: React.ReactNode }) {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);
    const bodiesMap = useRef<Map<string, { body: Matter.Body; element: HTMLElement }>>(new Map());
    const [isGravityEnabled, setIsGravityEnabled] = useState(false);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Events = Matter.Events;

        // Create engine
        const engine = Engine.create();
        engine.gravity.y = 0; // Start with no gravity
        engineRef.current = engine;

        // Create render (for debugging, but mainly we use DOM)
        // We render to a hidden canvas just to handle mouse inputs easier if needed, 
        // but actually we want the mouse to interact with the DOM bodies.
        // Matter.js Mouse interaction works on the Canvas usually. 
        // To make it work with DOM, we need to map mouse coordinates.
        // For now, let's keep the render invisible or on top for debug.

        // Actually, for "Google Anti Gravity", we usually just need the engine running.
        // The visual updates happen via DOM.

        const runner = Runner.create();
        runnerRef.current = runner;

        // Walls
        const width = window.innerWidth;
        const height = window.innerHeight;
        const wallOptions = { isStatic: true, render: { visible: false } };

        // Add walls slightly outside viewport
        const walls = [
            Bodies.rectangle(width / 2, -500, width * 4, 1000, wallOptions), // ceiling (high up so things can fly up)
            Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions), // ground
            Bodies.rectangle(width + 50, height / 2, 100, height * 4, wallOptions), // right
            Bodies.rectangle(-50, height / 2, 100, height * 4, wallOptions), // left
        ];
        World.add(engine.world, walls);

        // Mouse control
        // To get mouse interaction working with DOM elements, we likely need a transparent canvas on top
        // or we can try to hook up the mouse directly.
        // Let's create a transparent canvas for mouse interaction.
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                background: 'transparent',
                wireframes: false,
                showAngleIndicator: false
            }
        });
        renderRef.current = render;

        // Make canvas transparent and on top but allow clicks to pass through if no body is there?
        // Actually, if we want drag and drop, the canvas needs to capture events.
        render.canvas.style.position = 'fixed';
        render.canvas.style.top = '0';
        render.canvas.style.left = '0';
        render.canvas.style.pointerEvents = 'none'; // Initially let interactions pass through
        render.canvas.style.zIndex = '0'; // Behind UI initially?

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        World.add(engine.world, mouseConstraint);

        // Sync loop
        Events.on(engine, 'afterUpdate', () => {
            bodiesMap.current.forEach(({ body, element }) => {
                if (!body.isStatic) {
                    const { x, y } = body.position;
                    const rotation = body.angle;

                    // We need to account for the element's initial offset if we didn't center bodies correctly.
                    // But usually we set body position to element position on init.
                    // DOM transform is usually translation from initial position.
                    // Simplified: Set position absolute or fixed and update transform.

                    // However, resetting layout to absolute is tricky.
                    // Better approach:
                    // 1. Calculate delta from initial position?
                    // 2. Or just set top/left to 0 and use translate(x,y).

                    element.style.transform = `translate(${x - element.offsetWidth / 2}px, ${y - element.offsetHeight / 2}px) rotate(${rotation}rad)`;
                }
            });
        });

        Runner.run(runner, engine);
        // Render.run(render); // Uncomment to see debug wireframes

        // Handle Resize
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;

            // Update walls
            // ... (simplification: reload page or just update bodies)
            // For now, let's just assume desktop or ignore resize complex logic
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
        };
    }, []);

    // Update canvas interactions when gravity changes
    useEffect(() => {
        if (renderRef.current && engineRef.current) {
            if (isGravityEnabled) {
                engineRef.current.gravity.y = 1;
                // Enable pointer events on canvas so simple mouse constraint works
                // But this blocks buttons.
                // Workaround: Use custom mouse input or just accept that buttons become hard to click while flying.
                renderRef.current.canvas.style.pointerEvents = 'auto'; // Capture clicks
                renderRef.current.canvas.style.zIndex = '9999';
            } else {
                renderRef.current.canvas.style.pointerEvents = 'none';
                renderRef.current.canvas.style.zIndex = '-1';
            }
        }
    }, [isGravityEnabled]);

    const registerElement = (id: string, element: HTMLElement, options: Matter.IBodyDefinition = {}) => {
        if (!engineRef.current) return;

        // Calculate initial position in viewport
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const body = Matter.Bodies.rectangle(x, y, rect.width, rect.height, {
            isStatic: true, // Start static till gravity enabled
            restitution: 0.8,
            friction: 0.1,
            ...options
        });

        // We need to prepare the element for movement
        // Doing this immediately might break layout before animation starts.
        // Strategy: Only apply transforms after gravity is enabled? 
        // No, we need to apply transforms immediately if we want them to map 1:1.
        // But setting position fixed/absolute breaks flow.
        // TRICK:
        // When registering, we don't move them yet.
        // When Gravity triggers:
        // 1. We switch all registered elements to `position: fixed` using their current calculated screen coordinates.
        // 2. We set bodies to `isStatic: false`.

        bodiesMap.current.set(id, { body, element });
        Matter.World.add(engineRef.current.world, body);
    };

    const unregisterElement = (id: string) => {
        if (!engineRef.current) return;
        const item = bodiesMap.current.get(id);
        if (item) {
            Matter.World.remove(engineRef.current.world, item.body);
            bodiesMap.current.delete(id);
        }
    };

    const enableGravity = () => {
        setIsGravityEnabled(true);

        // Activate all bodies
        bodiesMap.current.forEach(({ body, element }) => {
            // Freeze current visual position in DOM by switching to fixed
            const rect = element.getBoundingClientRect();

            // We set the body position to exactly where it is now
            // Body already has x,y from register (if it didn't move). 
            // If layout shifted, we might need to update body position first.
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            Matter.Body.setPosition(body, { x, y });
            Matter.Body.setStatic(body, false); // Make dynamic

            // Set element styles to detach from flow
            element.style.position = 'fixed';
            element.style.left = '0';
            element.style.top = '0';
            element.style.width = `${rect.width}px`;
            element.style.height = `${rect.height}px`;
            element.style.margin = '0';
            element.style.zIndex = '100'; // Bring to front
            element.style.transform = `translate(${x - rect.width / 2}px, ${y - rect.height / 2}px)`;
        });
    };

    return (
        <PhysicsContext.Provider value={{ registerElement, unregisterElement, enableGravity, isGravityEnabled }}>
            <div ref={sceneRef} className="relative w-full h-full">
                {children}
            </div>
        </PhysicsContext.Provider>
    );
}
