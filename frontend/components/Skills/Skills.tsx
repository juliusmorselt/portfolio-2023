import React, { useState, useEffect } from "react"
import Image from "next/image"
import "swiper/swiper-bundle.css"
import AOS from "aos"
import "aos/dist/aos.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { getSkill } from "../../sanity/sanity-utils"
import Card from "../Card/Card"

type SkillData = {
  _id: string,
  _createdAt: string,
  categories: any[]
}

export default function Skills()
{
  const [skillData, setSkillData] = useState<SkillData[]>([])
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

  useEffect(() =>
  {
    async function fetchExperienceData()
    {
      const data = await getSkill()
      setSkillData(data)
    }
    fetchExperienceData()
  }, [])

  useEffect(() =>
  {
    AOS.init()
  }, [])

  return (
    <section id="skills" className="container">
      {skillData.map((item: SkillData, index: number) =>
      {
        return (
          <React.Fragment key={index}>
            <div />
            <h2>Vaardigheden</h2>
            <p>Ik heb veel ervaring met deze programma&apos;s en programmeertalen</p>
            <div className="py-6">
              {/* Tabs */}
              <div className="flex flex-wrap sm:flex-nowrap justify-center gap-2 text-center pb-6">
                {item.categories?.map((category: any, categoryIndex: number) =>
                {
                  const { category: categoryName } = category
                  const isActive = categoryIndex === activeCategoryIndex
                  return (
                    <div
                      key={categoryIndex}
                      onClick={() => setActiveCategoryIndex(categoryIndex)}
                      className="border-b border-b-white bg-white rounded-md hover:bg-violet-900 hover:bg-opacity-50 hover:cursor-pointer transition-all w-full"
                    >
                      <p
                        className={`mb-0 p-4 ${isActive ? "font-bold" : "font-regular"
                          }`}
                      >
                        {categoryName}
                      </p>
                    </div>
                  )
                })}
              </div>
              <ResponsiveMasonry className="columns-auto">
                <Masonry gutter="12px">
                  {/* Cards */}
                  {item.categories.map((category: any, categoryIndex) =>
                  {
                    const { skills_array } = category
                    const isActive = categoryIndex === activeCategoryIndex
                    return (
                      isActive &&
                      skills_array.map((item: any, index: number) => (
                        <Card
                          key={index}
                          className="overflow-hidden [&_p]:mb-0 group hover:rotate-1 relative"
                        >
                          <h3 className="max-w-[80%]">
                            {item?.title}
                          </h3>
                          {item?.description.map((block: any, blockIndex: number) => (
                            <div key={blockIndex}>
                              {block.children.map((span: any, spanIndex: number) => (
                                <span key={spanIndex}>{span.text}</span>
                              ))}
                            </div>
                          ))}
                          <div className="absolute overflow-hidden z-20 w-[40px] !aspect-square right-6 top-6">
                            <img
                              src={item.image}
                              alt="icon"
                              className="h-full w-full"
                            />
                          </div>
                        </Card>
                      ))
                    )
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </React.Fragment>
        )
      })}
    </section>
  )
}
