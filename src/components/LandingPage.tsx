"use client";

import React, { useState } from "react";
import { usePhysics } from "./PhysicsScene";
import PhysicsItem from "./PhysicsItem";

export default function LandingPage() {
    const { enableGravity, isGravityEnabled } = usePhysics();
    const [ignited, setIgnited] = useState(false);

    const handleIgnite = () => {
        enableGravity();
        setIgnited(true);
    };

    return (
        <div className="relative w-full overflow-hidden min-h-screen">
            {/* Navbar Placeholder */}
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
                <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-16 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-border-gold w-full max-w-5xl transition-all duration-300 pointer-events-auto">
                    {/* Logo */}
                    <PhysicsItem id="nav-logo">
                        <a className="flex items-center gap-2 group" href="#">
                            <span className="material-symbols-outlined text-primary text-3xl transition-transform duration-300 group-hover:rotate-180">diamond</span>
                            <span className="font-display font-bold text-xl tracking-wider text-white">OZ <span className="text-primary">PRIME</span></span>
                        </a>
                    </PhysicsItem>
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <PhysicsItem id="nav-services">
                            <a className="font-display text-sm font-medium text-gray-400 hover:text-primary transition-colors block" href="#services">Services</a>
                        </PhysicsItem>
                        <PhysicsItem id="nav-portfolio">
                            <a className="font-display text-sm font-medium text-gray-400 hover:text-primary transition-colors block" href="#work">Portfolio</a>
                        </PhysicsItem>
                        <PhysicsItem id="nav-pricing">
                            <a className="font-display text-sm font-medium text-gray-400 hover:text-primary transition-colors block" href="#pricing">Pricing</a>
                        </PhysicsItem>
                    </div>

                    {/* CTA */}
                    <PhysicsItem id="nav-cta">
                        <button className="bg-primary hover:bg-[#ebd038] text-background-dark font-display text-sm font-bold py-2 px-5 rounded-full shadow-[0_0_15px_rgba(244,213,37,0.4)] hover:shadow-[0_0_25px_rgba(244,213,37,0.6)] transition-all transform hover:scale-105 cursor-pointer block">
                            Get Started
                        </button>
                    </PhysicsItem>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0 bg-grid-pattern bg-[size:4rem_4rem] opacity-[0.07] animate-pulse-slow"></div>
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(244,213,37,0.08)_0%,transparent_60%)] animate-float"></div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                    <PhysicsItem id="hero-badge">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-display tracking-widest uppercase text-gray-400">System Online</span>
                        </div>
                    </PhysicsItem>
                    <div className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter">
                        <PhysicsItem id="hero-title-1" className="mb-2">
                            <span className="block text-white animate-fade-in-up" style={{ animationDelay: '0.3s' }}>WHERE LOGIC</span>
                        </PhysicsItem>
                        <PhysicsItem id="hero-title-2">
                            <span className="block text-gold-gradient animate-fade-in-up" style={{ animationDelay: '0.5s' }}>MEETS MAGIC</span>
                        </PhysicsItem>
                    </div>

                    <PhysicsItem id="hero-desc">
                        <p className="font-body text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                            Elevate your digital presence with precision engineering and artistic mastery. We forge identities that resonate with power and exclusivity.
                        </p>
                    </PhysicsItem>
                    <div className="pt-8">
                        <PhysicsItem id="hero-cta">
                            <button
                                onClick={handleIgnite}
                                className="group relative flex items-center gap-3 bg-transparent border border-primary/50 text-primary font-display font-bold text-lg px-8 py-4 rounded-lg overflow-hidden transition-all hover:border-primary hover:bg-primary/10 animate-pulse-glow cursor-pointer animate-fade-in-up"
                                style={{ animationDelay: '0.9s' }}
                            >
                                <span className="relative z-10">{ignited ? "GRAVITY ENGAGED" : "IGNITE YOUR BRAND"}</span>
                                <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </button>
                        </PhysicsItem>
                    </div>
                </div>
            </header>

            {/* Services Section Placeholder */}
            <section id="services" className="relative py-24 px-4 md:px-10 lg:px-20 bg-background-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <PhysicsItem id="services-title">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Cyber-Engineered <span className="text-primary">Solutions</span></h2>
                        </PhysicsItem>
                        <PhysicsItem id="services-desc">
                            <p className="font-body text-gray-400 text-lg max-w-xl">We craft digital experiences that defy expectations using cutting-edge frameworks.</p>
                        </PhysicsItem>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Large Card */}
                        <div className="md:col-span-2">
                            <PhysicsItem id="service-card-1" className="h-full">
                                <div className="group relative bg-surface-dark border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-border-gold transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,213,37,0.1)] h-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                                        <span className="material-symbols-outlined text-9xl text-primary">architecture</span>
                                    </div>
                                    <div className="relative z-10 h-full flex flex-col justify-end">
                                        <div className="mb-auto p-2 bg-white/5 w-fit rounded-lg mb-8 group-hover:bg-primary/20 transition-colors">
                                            <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
                                        </div>
                                        <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Web Architecture</h3>
                                        <p className="font-body text-gray-400">Scalable, high-performance web applications built for the future using Next.js and React server components. We build the skeleton of your digital empire.</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                                </div>
                            </PhysicsItem>
                        </div>

                        {/* Tall Card */}
                        <div className="md:row-span-2">
                            <PhysicsItem id="service-card-2" className="h-full">
                                <div className="group relative bg-surface-dark border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-border-gold transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,213,37,0.1)] flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                    <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-30 group-hover:rotate-12 transition-all duration-500">
                                        <span className="material-symbols-outlined text-9xl text-white">all_inclusive</span>
                                    </div>
                                    <div className="mb-auto p-2 bg-white/5 w-fit rounded-lg mb-8 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-3xl">all_inclusive</span>
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Brand Alchemy</h3>
                                    <p className="font-body text-gray-400 mb-6">Forging identities that resonate with power. We transmute base concepts into golden brand standards that dominate markets.</p>
                                    <div className="mt-auto h-40 w-full rounded-lg bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd1CSfQMlXxxNpfXx9zWQhZOzwqbfnQauB3XzjZUjxus0IP80jXm36eRfTvKpbgRIsWXlcSehZ_xdWOofSI4ZGVCQTDoPAZxVBB60R9MxKhhKw_31_0MTiMQYB5Q8-GtD895if5m9qsZ4V5LvuXngHuUURnPyPbIoPouvVy7IxPmZ5pcUCWPOdCReyf7sfAa3x1nv0O9qao1HxJiAfC6kN7JhResrXWTLIINhgzSv2iqJCunPjz7Z5qjP7DlbBKbeLdTkEQW5hplY5')" }}></div>
                                </div>
                            </PhysicsItem>
                        </div>

                        {/* Small Card 1 */}
                        <PhysicsItem id="service-card-3">
                            <div className="group relative bg-surface-dark border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-border-gold transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,213,37,0.1)] h-full animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                <div className="flex flex-col h-full justify-between">
                                    <div className="p-2 bg-white/5 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Full-Stack Dev</h3>
                                        <p className="font-body text-sm text-gray-400">Robust backends, sleek frontends.</p>
                                    </div>
                                </div>
                            </div>
                        </PhysicsItem>

                        {/* Small Card 2 */}
                        <PhysicsItem id="service-card-4">
                            <div className="group relative bg-surface-dark border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-border-gold transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,213,37,0.1)] h-full animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                                <div className="flex flex-col h-full justify-between">
                                    <div className="p-2 bg-white/5 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Growth Hacking</h3>
                                        <p className="font-body text-sm text-gray-400">Data-driven scaling strategies.</p>
                                    </div>
                                </div>
                            </div>
                        </PhysicsItem>
                    </div>
                </div>
            </section>

            {/* Selected Works (Masonry) */}
            <section id="work" className="relative py-24 px-4 md:px-10 lg:px-20 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <PhysicsItem id="work-title">
                            <div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">Selected <span className="text-gray-600">Works</span></h2>
                            </div>
                        </PhysicsItem>
                        <PhysicsItem id="work-link">
                            <a className="hidden md:flex items-center gap-2 text-primary font-display font-medium hover:text-white transition-colors" href="#">
                                View All Projects <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </a>
                        </PhysicsItem>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {/* Project 1 */}
                        <PhysicsItem id="proj-1">
                            <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,213,37,0.2)]">
                                <img alt="Cyberpunk city street at night" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEJsx6NVRi3OFGOfz3Ef9vxKRceo4pU7w-PcRGFcBhtiEh_Rqw0_ON-jhkcH_gK9cTHXFEzy_R7JXf7RQql6JDK_LLJlW3UgJ55xuhKWYT88fxv7jLS5MIJeONRdUTkm-fvwiz_br8mZ32JrHOZU5heYfTs1aRlNssg0ZDqXFSx5oLdk47mXNloffOObS5zGCu93n-cTf1dWPJNCHoZRRg1fZozLYNRMu5zNftgSt0eM3HbmX92ICnIcMfgiZeLS0oUJL7JM9IqaK3" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <h3 className="text-primary font-display font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">NEON NEXUS</h3>
                                    <p className="text-white text-sm font-body translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Fintech Dashboard UI</p>
                                </div>
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-border-gold rounded-xl transition-all duration-500 shadow-[inset_0_0_20px_rgba(244,213,37,0)] group-hover:shadow-[inset_0_0_20px_rgba(244,213,37,0.2)]"></div>
                            </div>
                        </PhysicsItem>

                        {/* Project 2 */}
                        <PhysicsItem id="proj-2">
                            <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,213,37,0.2)]">
                                <img alt="Abstract fluid metallic shapes" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0N-KQXqaTgOqZ5O0KsUOs9N03wHKyVMWDB7-ZXtu2tD4zxlZusul-EDVp5tSeW6_IuONazgSaVKsg9Lf6OATl1MRwDvhYcZ-U7vr9rAjWBu2sOBNRGioJxV61uC4N83ja5twfjuVr19NijPQUVg1P3enJ-5GT3ImWaV_KSyhF2meDLyYUvnh8M6Qrqqw0ybcpajmBlyi04eIjuay6J6xV7JxPWDwpsxGxVbV88kAa9P12W1AXJoFq4ULi1JA6vHhDya4n1nhbzKxG" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <h3 className="text-primary font-display font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">AETHER</h3>
                                    <p className="text-white text-sm font-body translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Luxury E-commerce</p>
                                </div>
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-border-gold rounded-xl transition-all duration-500 shadow-[inset_0_0_20px_rgba(244,213,37,0)] group-hover:shadow-[inset_0_0_20px_rgba(244,213,37,0.2)]"></div>
                            </div>
                        </PhysicsItem>

                        {/* Project 3 */}
                        <PhysicsItem id="proj-3">
                            <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,213,37,0.2)]">
                                <img alt="Minimalist architecture with concrete and light" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmTU6olCqK-pa5-FKlY7gfAin0vJBiM42k3-9dF2qBBaGGdXq5ZRpQzmyQ-IsMRmSBqlL7cmubKJTHO4QzhZ_QWP-a8bW12UgcLKSs7JJjNCFQJbd0KzNZ6IiTaA8EFqq3M0yxP5pquKq0Ne2bFxjJ79jTVfVEIWv_rFZU3XBkFeeD-pso76i6PKRC7_RQe4ACeF-D5-nxqqaEPsKHK1UcXwIyTVFMzG0xa0T7F0zpD6-2rUcOoSNsYQA4vBy9M0iY77YytmyCxmaM" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <h3 className="text-primary font-display font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">MONOLITH</h3>
                                    <p className="text-white text-sm font-body translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Architecture Portfolio</p>
                                </div>
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-border-gold rounded-xl transition-all duration-500 shadow-[inset_0_0_20px_rgba(244,213,37,0)] group-hover:shadow-[inset_0_0_20px_rgba(244,213,37,0.2)]"></div>
                            </div>
                        </PhysicsItem>

                        {/* Project 4 */}
                        <PhysicsItem id="proj-4">
                            <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,213,37,0.2)]">
                                <img alt="Matrix code rain visualization" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyPIeFop0HMK98x_6fQ6upAZYPTyQwIw9OXNoFkSWW7gdos0Q4GnC_JEHibYYzMCj-BtV-RoZ7kyYaPRm1SmOSiNLDWgQy5lr8-_c-fl1TMnHWRtqVyaJeCiCeLghyKsrTSiHseSY_T2AwqpCejUuzYJu6koERI0tJxAyGfAQNsF8IcGolOLUY0hag2AtUCneXw1QbteHTtkN79uz_OGKOhsa2i0MdkigYAVRoAqqZojHpYdHTFMqguiVN1NUKtafSAxaYOMVtn8Vk" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <h3 className="text-primary font-display font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">CIPHER</h3>
                                    <p className="text-white text-sm font-body translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Security SaaS Platform</p>
                                </div>
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-border-gold rounded-xl transition-all duration-500 shadow-[inset_0_0_20px_rgba(244,213,37,0)] group-hover:shadow-[inset_0_0_20px_rgba(244,213,37,0.2)]"></div>
                            </div>
                        </PhysicsItem>

                        {/* Project 5 */}
                        <PhysicsItem id="proj-5">
                            <div className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,213,37,0.2)]">
                                <img alt="Laptop showing code on screen" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj3J-PWmxD9l5Y58LbWAcUaZcyS3PKBEYNZEEwTsU79CvY3JzqqWIXsE83esZpnsTAzJ-Dbc7flnSDKUz1aBLRBftNkvtYVNv8rd1oQI3-_0Nji8GxuVvawEo3Wfeh-2HSbnyNzpqy66LpjYW_WSiy1chX700RXrAAqojJKJPcy7Ax6DVz5S-noCwPNZdDCS_XKnsVlhmkieq7NDxEH2p6hbm4ARMMC2i9eVCDymIzskqldIaPqFN_itLeERjsugwjOvwc7Rez56EE" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <h3 className="text-primary font-display font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">DEVFLOW</h3>
                                    <p className="text-white text-sm font-body translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Developer Tooling</p>
                                </div>
                                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-border-gold rounded-xl transition-all duration-500 shadow-[inset_0_0_20px_rgba(244,213,37,0)] group-hover:shadow-[inset_0_0_20px_rgba(244,213,37,0.2)]"></div>
                            </div>
                        </PhysicsItem>
                    </div>

                    <div className="mt-8 flex justify-center md:hidden">
                        <PhysicsItem id="view-all-mo">
                            <a className="flex items-center gap-2 text-primary font-display font-medium hover:text-white transition-colors" href="#">
                                View All Projects <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </a>
                        </PhysicsItem>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative py-24 px-4 md:px-10 lg:px-20 bg-background-dark overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <PhysicsItem id="pricing-title">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Investment <span className="text-primary">Tiers</span></h2>
                        </PhysicsItem>
                        <PhysicsItem id="pricing-desc">
                            <p className="font-body text-gray-400 text-lg">Transparent pricing for elite outcomes.</p>
                        </PhysicsItem>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Basic Tier */}
                        <PhysicsItem id="pricing-1">
                            <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,213,37,0.1)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <div>
                                    <h3 className="font-display text-xl font-bold text-gray-300">Initiate</h3>
                                    <div className="mt-4 flex items-baseline">
                                        <span className="text-4xl font-bold text-white">$4,999</span>
                                        <span className="ml-2 text-gray-500">/ project</span>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-400">Perfect for landing pages and MVPs.</p>
                                </div>
                                <ul className="space-y-4 mb-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-300 text-sm">Custom Single Page Design</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-300 text-sm">Next.js Implementation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-300 text-sm">Mobile Responsive</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-gray-600 text-sm mt-1">cancel</span>
                                        <span className="text-gray-600 text-sm">Advanced Animations</span>
                                    </li>
                                </ul>
                                <button className="w-full border border-white/20 hover:border-white/40 text-white font-display font-medium py-3 rounded-lg transition-colors cursor-pointer block">Select Plan</button>
                            </div>
                        </PhysicsItem>

                        {/* Popular Tier (Glowing) */}
                        <PhysicsItem id="pricing-2">
                            <div className="glass-panel relative rounded-2xl p-8 flex flex-col gap-6 transform md:-translate-y-4 md:scale-105 border-border-gold shadow-[0_0_40px_rgba(244,213,37,0.1)] transition-all duration-500 hover:scale-[1.08] hover:shadow-[0_0_60px_rgba(244,213,37,0.3)] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[#b89b0e] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                                <div>
                                    <h3 className="font-display text-xl font-bold text-primary">Ascend</h3>
                                    <div className="mt-4 flex items-baseline">
                                        <span className="text-5xl font-bold text-white">$12,999</span>
                                        <span className="ml-2 text-gray-500">/ project</span>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-400">Full corporate identity and web presence.</p>
                                </div>
                                <ul className="space-y-4 mb-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-white text-sm">Multi-page Architecture</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-white text-sm">Interactive 3D Elements</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-white text-sm">CMS Integration</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-white text-sm">SEO Optimization Suite</span>
                                    </li>
                                </ul>
                                <button className="w-full bg-primary hover:bg-[#ebd038] text-background-dark font-display font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(244,213,37,0.3)] transition-all cursor-pointer block">Ignite Now</button>
                            </div>
                        </PhysicsItem>

                        {/* Enterprise Tier */}
                        <PhysicsItem id="pricing-3">
                            <div className="glass-panel rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(244,213,37,0.1)] animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                <div>
                                    <h3 className="font-display text-xl font-bold text-gray-300">Dominion</h3>
                                    <div className="mt-4 flex items-baseline">
                                        <span className="text-4xl font-bold text-white">Custom</span>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-400">For industry leaders needing bespoke solutions.</p>
                                </div>
                                <ul className="space-y-4 mb-4">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-300 text-sm">Full-Stack SaaS Development</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-300 text-sm">Dedicated Project Manager</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-300 text-sm">24/7 Priority Support</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-gray-300 text-sm">AI Integration</span>
                                    </li>
                                </ul>
                                <button className="w-full border border-white/20 hover:border-white/40 text-white font-display font-medium py-3 rounded-lg transition-colors cursor-pointer block">Contact Sales</button>
                            </div>
                        </PhysicsItem>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black pt-20 pb-10 border-t border-white/10 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
                        <div className="max-w-sm">
                            <PhysicsItem id="footer-brand">
                                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="material-symbols-outlined text-primary text-2xl">diamond</span>
                                        <span className="font-display font-bold text-xl tracking-wider text-white">OZ <span className="text-primary">PRIME</span></span>
                                    </div>
                                    <p className="text-gray-500 font-body text-sm mb-6">Defining the future of digital luxury. We build the impossible for the incredible.</p>
                                </div>
                            </PhysicsItem>
                            <div className="flex gap-4">
                                <PhysicsItem id="footer-icon-1"><a className="text-gray-400 hover:text-primary transition-colors block" href="#"><span className="material-symbols-outlined">mail</span></a></PhysicsItem>
                                <PhysicsItem id="footer-icon-2"><a className="text-gray-400 hover:text-primary transition-colors block" href="#"><span className="material-symbols-outlined">public</span></a></PhysicsItem>
                                <PhysicsItem id="footer-icon-3"><a className="text-gray-400 hover:text-primary transition-colors block" href="#"><span className="material-symbols-outlined">alternate_email</span></a></PhysicsItem>
                            </div>
                        </div>
                        <div className="flex gap-16 flex-wrap">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-display font-bold">Sitemap</h4>
                                <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Services</a>
                                <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Work</a>
                                <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Pricing</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-display font-bold">Legal</h4>
                                <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Privacy</a>
                                <a className="text-gray-500 hover:text-primary text-sm transition-colors" href="#">Terms</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="text-gray-600 text-xs">© 2023 Oz Prime. All Rights Reserved.</span>
                        <span className="text-gray-600 text-xs">Designed with <span className="text-primary">♥</span> in Cyber-Space</span>
                    </div>
                </div>
                {/* Massive Footer Text */}
                <PhysicsItem id="footer-massive">
                    <div className="w-full flex justify-center mt-10 select-none pointer-events-none opacity-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h1 className="text-[15vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-[#333] to-black tracking-tighter">OZ PRIME</h1>
                    </div>
                </PhysicsItem>
            </footer>
        </div >
    );
}
