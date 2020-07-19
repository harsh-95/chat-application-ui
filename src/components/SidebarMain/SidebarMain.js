import React from 'react';
import './SidebarMain.css';
import SidebarNavMenu from '../SidebarNavMenu/SidebarNavMenu';
import SidebarConetacts from '../SidebarContacts/SidebarContacts';

const SidebarMain = () => {


    return (
        <div className="sidebarMainContainer">
            <div className="sidebarContainer">
                <SidebarNavMenu/>
                <SidebarConetacts/>
            </div>
        </div>
    )
}

export default SidebarMain;