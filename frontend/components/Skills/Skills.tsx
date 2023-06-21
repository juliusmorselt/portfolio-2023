"use client"

import { skillsData } from "../../data/data"
import React, { useState, useEffect } from "react"
import "swiper/swiper-bundle.css"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Card from "../Card/Card"

export default function Skills() {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    useEffect(() => {
        AOS.init()
    }, [])
    return(
        <section id="skills" className="container">
            {skillsData.map((item, index) => (
                <div key={index}>
                    <div />
                    <h2>Vaardigheden</h2>
                    <p>Ik heb veel ervaring met deze programmas en programmeertalen</p>

                    <div className="py-6">
                        {/* Tabs */}
                        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-2 text-center pb-6">
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

                        <ResponsiveMasonry>
                            <Masonry gutter="12px">
                                {/* Cards */}
                                {item.data?.tabs[activeTabIndex].tab.cards.map(
                                    (item, index) => (
                                        <Card
                                            key={index}
                                            className="overflow-hidden [&_p]:mb-0 group hover:rotate-1 relative"
                                        >
                                            <h3 className="max-w-[80%]">
                                                {item.card.title}
                                            </h3>
                                            <p>{item.card.description}</p>
                                            <div className="absolute overflow-hidden z-20 w-[40px] aspect-square right-6 top-6">
                                                <Image
                                                    src={item.card.icon}
                                                    alt="icon"
                                                />
                                            </div>
                                        </Card>
                                    )
                                )}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            ))}
        </section>
    )
    
}