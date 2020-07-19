import React from 'react';
import './SidebarNavMenu.css';

const SidebarNavMenu = () => {


    return (
        <div className="sidebarNavMenuContainer">
            <div className="sidebarNavMenuDiv">
                <div className="sidebarNavTopMenu">
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-external-link" aria-hidden="true"></i>
                    </div>
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-commenting-o" aria-hidden="true"></i>
                    </div>
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                    </div>
                </div>

                <div className="sidebarNavBottomMenu">
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-steam-square" aria-hidden="true"></i>
                    </div>
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-bandcamp" aria-hidden="true"></i>
                    </div>
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-viadeo-square" aria-hidden="true"></i>
                    </div>
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </div>
                    <div className="sidebarMenuIcon">
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarNavMenu;