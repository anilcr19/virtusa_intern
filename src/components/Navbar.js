import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from 'react-router-dom'
import {Sidebardata} from './Sidebardata'
import './Navbar.css'
import {IconContext} from 'react-icons'

function Navbar()
{
    const [Sidebar,setSidebar]=useState(false);

    const showSidebar =()=>{
        setSidebar(!Sidebar);
    }


    return (

        <IconContext.Provider value={{color:'#fff'}}>
   <div className='navbar'>
    
    <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}  />
    </Link>

    <nav className={Sidebar?'nav-menu active':'nav-menu'}>

    <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
           <Link to='#' className='menu-bars'>
           <AiIcons.AiOutlineClose/>
           </Link> 
        </li>
        {
            Sidebardata.map((item,index)=>{
                return (
                    <li key={index} className={item.cName}>
                <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
                     </li>
                )
            })
        }

    </ul>
    </nav>

   </div>
   </IconContext.Provider>

    );
}

export default Navbar;