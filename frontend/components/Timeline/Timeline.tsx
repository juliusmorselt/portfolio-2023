import React, { useState, useEffect } from "react"
import "swiper/swiper-bundle.css"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Timeline({ tlInfo, activeTabIndex }: any) {
    useEffect(() => {
        AOS.init()
    }, [])
    const activeTabData =
        tlInfo[0]?.data?.tabs[activeTabIndex]?.tab?.experience || []
    return (
        <div className="flex gap-5">
            {/* Line */}
            <div className="flex-grow border border-black" />

            <div>
                {activeTabData.map((item: any, index: number) => (
                    <div key={index} className="mb-12 last:mb-0">
                        <h4 className="-mt-1 relative font-bold text-xl">
                            <div className="mt-1 rounded-full -left-[31px] bg-black w-[20px] aspect-square absolute" />
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
