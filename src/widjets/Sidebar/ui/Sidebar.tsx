import React, { useState } from 'react';
import { cn } from 'shared/utils';
import { ToggleTheme } from 'widjets/ToggleTheme';
import { ToggleLang } from 'widjets/ToggleLang';
import * as style from './Sidebar.module.scss';

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
            <button type="button" onClick={handleToggle}>
                toggle
            </button>
            <ToggleTheme />
            <ToggleLang />
        </div>
    );
};
