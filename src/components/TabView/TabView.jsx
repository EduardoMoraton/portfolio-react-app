import React, { useState } from "react";
import { motion } from "framer-motion";

function TabView({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const tabWidth = 100 / tabs.length; // Calculate the width of each tab
  const indicatorX = selectedTab * tabWidth; // Calculate the X position of the indicator

  return (
    <>
      <ul className={'flex relative items-center bg-currentLine p-2 rounded-full'}>
        {tabs.map((tab, index) => (
          <li
          className={'z-10 flex justify-center'}
            key={index}
            onClick={() => handleTabChange(index)}
            style={{
              width: `${tabWidth}%`,
            }}
          >
            {tab.name}
          </li>
        ))}
        <motion.div
          className="h-full bg-foreground rounded-full absolute bottom-0 opacity-20"
          style={{
            width: `${tabWidth}%`,
            left: `${indicatorX}%`,
            transition: "left 0.3s",
          }}
        ></motion.div>
      </ul>
      <div className={'w-[800px] h-[600px]'}>{tabs[selectedTab].tab}</div>
    </>
  );
}

export default TabView;
