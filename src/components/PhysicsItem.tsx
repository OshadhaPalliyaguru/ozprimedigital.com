"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePhysics } from "./PhysicsScene";

interface PhysicsItemProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function PhysicsItem({ children, className = "", id }: PhysicsItemProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const { registerElement, unregisterElement } = usePhysics();
    // Generate a random ID if not provided
    const [uniqueId] = useState(id || `physics-item-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        if (elementRef.current) {
            // Delay registration slightly to ensure layout is settled?
            // Or just register.
            registerElement(uniqueId, elementRef.current);
        }
        return () => unregisterElement(uniqueId);
    }, [uniqueId, registerElement, unregisterElement]);

    return (
        <div ref={elementRef} className={`physics-item ${className}`}>
            {children}
        </div>
    );
}
