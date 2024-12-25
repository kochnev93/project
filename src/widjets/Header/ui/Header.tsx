import React from 'react';
import { cn } from 'shared/utils';
import { useTranslation } from 'react-i18next';
import { MdOutlineMenu } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { settingsActions } from 'entities/Settings';
import * as style from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleToggleNavbar = () => {
        dispatch(settingsActions.toggleNavbar());
    };

    return (
        <header className={cn(style.header, {}, [className])}>
            <button type="button" onClick={handleToggleNavbar}>
                <MdOutlineMenu />
            </button>
        </header>
    );
};
