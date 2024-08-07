"use client";

import React, { useState, useEffect } from 'react';
import Header from "@/components/custom/Header";
import Menu from "@/components/custom/NavigationMenu";
import Footer from "@/components/custom/Footer";
import AddedPoints from '@/components/custom/popups/AddedPoints';

export default function HomePage() {
    const navigationItems = [
        { title: "PLAY", url: "/mode" },
        { title: "WIKI", url: "/wiki" },
        { title: "LORE", url: "/lore" },
    ];

    return (
        <main className="relative">
            <Header />
            <Menu items={navigationItems} />
            <AddedPoints />
            <Footer />
            
        </main>
    );
}
