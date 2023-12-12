"use client"

//Hooks
import { useState } from "react"

//Data
import Logo from '../SVG/logo'

export default function Header({ navItems }: any)
{
    return (
        <header className="h-[90px] bg-white shadow-lg">
            <div className="container h-full flex items-center justify-center">
                <div className="w-[200px]">
                    <Logo />
                </div>
            </div>
        </header>
    )
}