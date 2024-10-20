import React from 'react';
import { cn } from 'shared/utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as style from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={cn(style.header, {}, [className])}>
            <Link to="/">{t('Главная')}</Link>
            <Link to="/about">{t('О нас')}</Link>
        </div>
    );
};
