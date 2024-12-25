import React from 'react';
import { cn } from 'shared/utils';
import { ToggleTheme } from 'widjets/ToggleTheme';
import { ToggleLang } from 'widjets/ToggleLang';
import { getStatusNavbar, settingsActions } from 'entities/Settings';
import { useDispatch, useSelector } from 'react-redux';
import * as style from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps): React.ReactElement => {
    const { className } = props;

    const dispatch = useDispatch();
    const isOpen = useSelector(getStatusNavbar);

    const handleMouseEnter = () => {
        dispatch(settingsActions.openNavbar());
    };

    const handleMouseLeave = () => {
        dispatch(settingsActions.toggleNavbar());
    };

    return (
        <nav
            className={cn(style.Navbar, { [style.close]: !isOpen }, [className])}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <ToggleTheme />
            <ToggleLang />
        </nav>
    );
};
