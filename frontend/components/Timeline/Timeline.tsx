import React, { useState, useEffect } from "react"

import Image from "next/image"

//External libraries
import "swiper/swiper-bundle.css"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Timeline({ tlInfo, activeTabIndex }: any) {
    useEffect(() => {
        AOS.init({
            disable:true
        })
    }, [])
    const activeTabData =
        tlInfo[0]?.data?.tabs[activeTabIndex]?.tab?.experience || []
    return (
        <div className="flex gap-5" data-aos='fade-right'>
            {/* Line */}
            <div className="flex-grow border border-black" />

            <div>
                {activeTabData.map((item: any, index: number) => (
                    
                    <div key={index} className="mb-12 last:mb-0 [&_p]:last:mb-0">
                        <h4 className="-mt-1 relative font-bold text-xl ">

                            {/* The ball */}
                            <div className={`rounded-full ${index === 0 ? 'mt-1' : 'mt-1.5'} -left-[31px] bg-black w-[20px] aspect-square absolute`} />
                            
                            <div className="flex gap-2 items-center">

                                {/* The logo */}    
                                <div className="w-[30px] h-[30px]">
                                    <Image
                                        src={item.exp.logo}
                                        alt={item.exp.title + " logo"}
                                    />
                                </div>
                            
                                {/* The text */}
                                {item.exp.title}
                            </div>

                        </h4>
                        <p className="!mb-[1rem]">{item.exp.fromtill}</p>
                        <p>{item.exp.description}</p>
                        {item.exp.description2 && (
                            <p>{item.exp.description2}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function handleTabSwitch() {
    AOS.refresh();
}
