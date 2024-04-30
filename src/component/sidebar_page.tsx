 import React, {HTMLAttributes} from "react";


 type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always' | 'all';

const BREAK_POINTS = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
  always: 'always',
  all: 'all',
};

 interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * sidebar collapsed status
     */
    collapsed?: boolean;

    /**
     * width of the sidebar
     * @default ```250px```
     */
    width?: string;

    /**
     * width of the sidebar when collapsed
     * @default ```80px```
     */
    collapsedWidth?: string;

    /**
     * set when the sidebar should trigger responsiveness behavior
     * @type `xs | sm | md | lg | xl | xxl | all | undefined`
     */
    breakPoint?: BreakPoint;

    /**
     * alternative breakpoint value that will be used to trigger responsiveness
     *
     */
    customBreakPoint?: string;

     /**
     * duration for the transition in milliseconds to be used in collapse and toggle behavior
     * @default ```300```
     */
    transitionDuration?: number;

    /**
     * sidebar background image
     */
    image?: string;

    /**
     * sidebar toggled status
     */
    toggled?: boolean;

    /**
     * callback function to be called when sidebar's broken state changes
     */
    onBreakPoint?: (broken: boolean) => void;


    children?: React.ReactNode;

    logo:string;
    name:string;
    profession:string;
 }

 interface StyledSidebarProps extends Omit<SidebarProps, 'backgroundColor'> {
  collapsed?: boolean;
  toggled?: boolean;
  broken?: boolean;
}


 const SidebarA:React.FC<SidebarProps> = ({logo,name,profession, ...props}) => {
   return (
      <div className="sidebar" {...props}>
        <img src={logo} alt="logo" />
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
   );
 };

 

 export default SidebarA;
