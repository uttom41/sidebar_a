

// import React, {HTMLAttributes, ReactNode} from "react";


// export interface MenuItem extends HTMLAttributes<HTMLDivElement> {
//     title: string;
//     path: string;
//     icon: ReactNode;
//     iconClosed?: ReactNode;
//     iconOpened?: ReactNode;
//     subNav?: MenuItem[];
//  }

const MenuItem = {
    title: '',
    path: '',
    icon: null,
    iconClosed: null,
    iconOpened: null,
    subNav: [],
  };
  
  // Export MenuItem interface
  module.exports = MenuItem;