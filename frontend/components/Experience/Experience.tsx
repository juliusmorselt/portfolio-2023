import React, { useState, useEffect } from 'react';
import Timeline from '../Timeline/Timeline';
import { getExperience } from '../../sanity/sanity-utils';
import 'swiper/swiper-bundle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

type ExperienceData = {
    _id: string;
    _createdAt: string;
    categories: any[];
};

export default function Experience()
{
    const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    useEffect(() =>
    {
        async function fetchExperienceData()
        {
            const data = await getExperience();
            setExperienceData(data);
        }
        fetchExperienceData();
        AOS.init();
    }, []);

    return (
        <section id='experience' className='container'>
            <h2>Mijn ervaring</h2>
            <p>Relevante school en werk ervaring</p>
            {experienceData.map((item: ExperienceData, index: number) => (
                <React.Fragment key={index}>
                    <div className='flex flex-wrap sm:flex-nowrap justify-center gap-2 text-center pb-6'>
                        {item.categories.map(
                            (category: any, categoryIndex: number) =>
                            {
                                const { category: categoryName, companies } =
                                    category;
                                const isActive =
                                    categoryIndex === activeCategoryIndex;
                                return (
                                    <div
                                        key={categoryIndex}
                                        onClick={() =>
                                            setActiveCategoryIndex(
                                                categoryIndex
                                            )
                                        }
                                        className='border-b border-b-white bg-white rounded-md hover:bg-violet-900 hover:bg-opacity-50 hover:cursor-pointer transition-all w-full'
                                    >
                                        <p
                                            className={`mb-0 p-4 + ${isActive
                                                ? 'font-bold'
                                                : 'font-regular'
                                                }`}
                                        >
                                            {categoryName}
                                        </p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                    {item.categories.map(
                        (category: any, categoryIndex: number) =>
                        {
                            const { companies } = category;
                            const isActive =
                                categoryIndex === activeCategoryIndex;

                            return (
                                <div key={categoryIndex}>
                                    {/* Render Timeline component with companies prop */}
                                    {isActive && (
                                        <div className='py-6'>
                                            <Timeline
                                                companies={companies}
                                                isActive={isActive}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        }
                    )}
                </React.Fragment>
            ))}
        </section>
    );
}
