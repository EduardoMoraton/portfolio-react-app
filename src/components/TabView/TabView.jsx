import React, { useState } from "react";

function TabView({tabs}) {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };
  console.log(tabs)
  return (
    <>
      <ul className="flex">
        {tabs.map((tab)=>{
            
            <li>{tab.props.label}</li>
        })}
      </ul>
      <div>
      {tabs[selectedTab]}
      </div>
      
    </>
  );
}

export default TabView;
