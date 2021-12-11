import React from "react";
import { IoAnalyticsSharp, IoCodeSlashSharp, IoSettingsSharp, IoStatsChartSharp } from "react-icons/io5";
import { HiMusicNote } from "react-icons/hi";
import { FiUsers, FiSettings } from "react-icons/fi";
import { SiDatacamp, Si1001Tracklists } from "react-icons/si";

import '../Sidebar.scss';

const items = [
    {
        title: 'Overview',
        icon: IoStatsChartSharp
    },
    {
        title: 'Statistics',
        icon: IoAnalyticsSharp
    },
    {
        title: 'Commands',
        icon: IoCodeSlashSharp
    },
    {
        title: 'Settings',
        icon: IoSettingsSharp
    }
];

const links = items.map(item => {
    return (
        <li>
            <a href="#">
                { <item.icon /> }
                { item.title }
            </a>
        </li>
    );
});

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="brand">
            </div>
            <ul className="links">
                { links }
            </ul>
        </div>
    );
}

export default Sidebar;
