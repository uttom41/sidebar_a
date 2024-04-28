
import React, { useState } from 'react';
import Sidebar from './sidebar';
import MainContent from './main_content';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
    <button onClick={toggleSidebar}>Toggle Sidebar</button>
    {isSidebarOpen && <Sidebar />}
    <Sidebar />
    <MainContent />
  </div>
  );
};

export default Layout;   
