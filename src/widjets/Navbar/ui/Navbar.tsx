import React, { useEffect, useRef, useState } from 'react';
import { cn } from 'shared/utils';
import { getStatusNavbar } from 'entities/Settings';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as style from './Navbar.module.scss';
import { Logo, Profile, Menu } from './components';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps): React.ReactElement => {
    const { className } = props;

    const { t } = useTranslation();
    const isOpen = useSelector(getStatusNavbar);

    const [isHover, setIsHover] = useState(false);
    const timeoutId = useRef<ReturnType<typeof setTimeout>>(null);

    const handleMouseEnter = () => {
        timeoutId.current = setTimeout(() => {
            setIsHover(true);
        }, 300);
    };

    const handleMouseLeave = () => {
        clearTimeout(timeoutId.current);
        setIsHover(false);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId.current);
        };
    }, []);

    return (
        <nav
            className={cn(style.Navbar, { [style.close]: !isOpen, [style.hover]: isHover }, [className])}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Logo />
            <Profile />
            <Menu collapsed={!isOpen} />
            {/* <ToggleTheme /> */}
            {/* <ToggleLang /> */}
        </nav>
    );
};
