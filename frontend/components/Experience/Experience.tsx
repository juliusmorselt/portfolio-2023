"use client"

import { experienceData } from "../../data/data"
import React, { useState, useEffect, createContext } from "react"
import "swiper/swiper-bundle.css"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Card from "../Card/Card"
import Tabs from "../Tabs/Tabs"
import Timeline from "../Timeline/Timeline"


export default function Experience() {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section id="experience" className="container">
            <h2>Mijn ervaring</h2>
            <p>Relevante school en werk ervaring</p>
            {experienceData.map((item, index) => (
                <>
                    <div key={index} className="py-6 flex flex-wrap sm:flex-nowrap justify-center gap-2 text-center pb-6">
                        {item.data?.tabs.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTabIndex(index)}
                                className="border-b border-b-white bg-white rounded-md hover:bg-violet-900 hover:bg-opacity-50 hover:cursor-pointer transition-all w-full"
                            >
                                <p
                                    className={`mb-0 p-4 +
                                        ${
                                            activeTabIndex === index
                                                ? "font-bold"
                                                : "font-regular"
                                        }`}
                                >
                                    {item.tab.title}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Timeline activeTabIndex={activeTabIndex} tlInfo={experienceData}/>    
                </>
            
            ))}
        </section>
    )
}
