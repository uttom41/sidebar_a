import { FaInfo } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
import * as RiIcons from "react-icons/ri";

export interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  iconClosed?: React.ReactNode;
  iconOpened?: React.ReactNode;
  subNav?: MenuItem[];
}

const routes:MenuItem[] = [
  
  {
    path: "/",
    title: "AboutUs",
    icon: <FaInfo />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        path: "/about-us/vision",
        title: "OurVision",
        icon: <FaInfo />,
      },
      {
        path: "/about-us/vision",
        title: "OurVision",
        icon: <FaInfo />,
      },
    ],
  },
  {
    path: "/services",
    title: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    path: "/contact",
    title: "Contact",
    icon: <RiContactsLine />,
  },
];

export default routes;
