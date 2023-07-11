import React, { useEffect } from "react"
import Image from "next/image"
import "swiper/swiper-bundle.css"
import AOS from "aos"
import "aos/dist/aos.css"

type Company = {
    company: string
    from: string
    till: string
    description: any[]
    image: string
}

type TimelineProps = {
    companies: Company[]
    isActive: boolean
}

export default function Timeline({ companies, isActive }: TimelineProps) {
    useEffect(() => {
        AOS.init({
            disable: true,
        })
    }, [])

    return (
        isActive && (
            <div className="flex gap-5" data-aos="fade-right">
                <div className="flex-grow border border-black" />
                <div className="flex flex-col">
                    {companies.map((company: Company, index: number) => (
                        <div
                            key={index}
                            className="mb-12 last:mb-0 [&_p]:last:mb-0"
                        >
                            <h4 className="-mt-1 relative font-bold text-xl ">
                                {/* The ball */}
                                <div
                                    className={`rounded-full ${
                                        index === 0 ? "mt-1" : "mt-1.5"
                                    } -left-[31px] bg-black w-[20px] aspect-square absolute`}
                                />

                                <div className="flex gap-2 items-center">
                                    {/* The logo */}
                                    <div className="w-[30px] h-[30px]">
                                        <img
                                            src={company.image}
                                            alt="Company Image"
                                        />
                                    </div>

                                    {/* The text */}
                                    {company.company}
                                </div>
                            </h4>
                            <p className="!mb-[1rem]">
                                {company.from} {company.till}
                            </p>
                            {company.description.map(
                                (block: any, blockIndex: number) => (
                                    <div key={blockIndex}>
                                        {block.children.map(
                                            (span: any, spanIndex: number) => (
                                                <span
                                                    key={spanIndex}
                                                    style={span.style}
                                                >
                                                    {span.text}
                                                </span>
                                            )
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}
