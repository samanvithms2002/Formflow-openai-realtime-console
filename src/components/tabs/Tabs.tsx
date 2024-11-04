import React, { useState, ReactNode, useEffect } from 'react';
import './Tabs.scss';

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  activeTab?: number;
  onTabChange?: (tabIndex: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab = 0, onTabChange }) => {
  const [localActiveTab, setLocalActiveTab] = useState(activeTab);

  useEffect(() => {
    setLocalActiveTab(activeTab);
  }, [activeTab]);

  const handleTabChange = (index: number) => {
    setLocalActiveTab(index);
    onTabChange?.(index);
  };

  return (
    <div className="tabs-container">
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${index === localActiveTab ? 'active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[localActiveTab].children}</div>
    </div>
  );
};

export default Tabs;
