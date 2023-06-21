"use client"

import { useState } from "react"

interface TabsProps {
    tabInfo: any;
    setActiveTabIndex: (index: number) => void;
  }
  
  export default function Tabs({ tabInfo, setActiveTabIndex }: TabsProps) {
    const [activeTabIndex, setActiveTabIndexLocal] = useState(0);
  
    const handleTabClick = (index: number) => {
      setActiveTabIndexLocal(index);
      setActiveTabIndex(index);
    };
  
    return (
      <div>
        {tabInfo.map((item: any, index: number) => (
          <div className="flex justify-center gap-2 text-center pb-6" key={index}>
            {item.data?.tabs.map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => handleTabClick(index)}
                className="border-b border-b-white bg-white rounded-md hover:bg-violet-900 hover:bg-opacity-50 hover:cursor-pointer transition-all w-full"
              >
                <p
                  className={`mb-0 p-4 ${
                    activeTabIndex === index ? 'font-bold' : 'font-regular'
                  }`}
                >
                  {item.tab.title}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }