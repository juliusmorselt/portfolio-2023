import Image from "next/image"

//Data
import Myself from '../../assets/images/juliusmorselt.jpg'

import { useEffect, useState } from 'react'
import { getAboutMe } from "../../sanity/sanity-utils"
import { BlockContent } from "@sanity/block-content-to-react";
import { PortableText } from "@portabletext/react";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export default function About()
{
    const [aboutMe, setAboutMe] = useState([])
    useEffect(() =>
    {
        async function fetchData()
        {
            const info = await getAboutMe();
            setAboutMe(info)
        }
        fetchData()
    }, [])
    return (
        <div>
            {aboutMe.map((aboutme: any) => (
                <section key={aboutme._id} id="about" className="container flex justify-between flex-wrap md:flex-nowrap">

                    <div className="md:w-[60%]">
                        <h2>{aboutme.name}</h2>
                        <PortableText value={aboutme.description} />
                    </div>
                    <div className="sm:w-[20%] max-w-[250px] relative">
                        <div className="w-full aspect-auto overflow-hidden rounded-xl">
                            <img
                                src={aboutme.image}
                                alt='Myself'
                            />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}