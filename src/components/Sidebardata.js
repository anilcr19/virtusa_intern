import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"
import * as CgIcons from "react-icons/cg"
import { IoPencil} from "react-icons/io5";
import { IoCheckboxSharp } from "react-icons/io5";
import { MdPolicy,MdRateReview ,MdHelpCenter} from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";


export const Sidebardata=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Personal Details',
        path:'/details',
        icon:<BsIcons.BsPersonCircle/>,
        cName:'nav-text'
    }
    ,
    {
        title:'Documents',
        path:'/letter',
        icon:<CgIcons.CgNotes/>,
        cName:'nav-text'
    },
    {
        title:'Docs Verfiy',
        path:'/verify',
        icon:<IoCheckboxSharp/>,
        cName:'nav-text'
    }
    ,
    {
        title:'Service Bond',
        path:'/service',
        icon:<IoPencil/>,
        cName:'nav-text'
    }
    ,{
        title:'Policies',
        path:'/policy',
        icon:<MdPolicy/>,
        cName:'nav-text'
    }
    ,
    ,{
        title:'Bank Details ',
        path:'/bank',
        icon:<BsBank2/>,
        cName:'nav-text'
    }
    ,
    {
        title:'Traning ',
        path:'/training',
        icon:<IoDesktop/>,
        cName:'nav-text'
    }
    
]