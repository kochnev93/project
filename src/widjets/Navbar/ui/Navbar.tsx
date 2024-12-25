import React from 'react';
import { cn } from 'shared/utils';
import { getStatusNavbar, settingsActions } from 'entities/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as style from './Navbar.module.scss';
import { Logo, Profile, Menu } from './components';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps): React.ReactElement => {
    const { className } = props;

    const { t } = useTranslation();
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
            <Logo />
            <Profile />
            <Menu collapsed={!isOpen} />

            {/* <ul> */}
            {/*     <Link to="/">{t('Главная')}</Link> */}
            {/*     <Link to="/about">{t('О нас')}</Link> */}
            {/* </ul> */}
            {/* <ToggleTheme /> */}
            {/* <ToggleLang /> */}
        </nav>
    );
};
