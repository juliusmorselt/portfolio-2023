import React, { useState, useEffect } from "react"

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
                    <div key={index} className="mb-12 last:mb-0">
                        <h4 className="-mt-1 relative font-bold text-xl ">

                            {/* The ball */}
                            <div className={`rounded-full ${index === 0 ? 'mt-1' : 'mt-1.5'} -left-[31px] bg-black w-[20px] aspect-square absolute`} />
                            
                            {/* The text */}
                            {item.exp.title}
                        </h4>
                        <p>{item.exp.fromtill}</p>
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
