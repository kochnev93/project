import React, { useState } from "react";
import { cn } from "shared/utils";
import * as style from "./Sidebar.module.scss";
import { ToggleTheme } from "widjets/ToggleTheme";
import { ToggleLang } from "widjets/ToggleLang";

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={cn(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>
            <button onClick={handleToggle}>toggle</button>
            <ToggleTheme />
            <ToggleLang />
        </div>
    );
};
