import React from 'react';
import { cn } from 'shared/utils';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome } from 'react-icons/fa';
import { AppUrls } from 'shared/config/urls';
import * as style from './Menu.module.scss';

interface MenuProps {
    className?: string;
    collapsed: boolean;
}

export const Menu = (props: MenuProps) => {
    const { className, collapsed } = props;

    const { t } = useTranslation();
    const { pathname } = useLocation();

    console.log(pathname);

    return (
        <ul className={cn(style.Menu, {}, [className])}>
            <li
                className={cn(
                    style.link,
                    { [style.active]: AppUrls.main === pathname, [style.collapsed]: collapsed },
                    [],
                )}
            >
                <Link to={AppUrls.main}>
                    <FaHome />
                    <span>{t('Главная')}</span>
                </Link>
            </li>
            <li
                className={cn(
                    style.link,
                    { [style.active]: AppUrls.about === pathname, [style.collapsed]: collapsed },
                    [],
                )}
            >
                <Link to={AppUrls.about}>
                    <FaHome />
                    <span>{t('О нас')}</span>
                </Link>
            </li>
        </ul>
    );
};
