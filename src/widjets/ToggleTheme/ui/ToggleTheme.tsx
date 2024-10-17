import React from 'react';
import { cn } from 'shared/utils';
import { ThemeEnum, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import * as style from './ToggleTheme.module.scss';

interface ToggleThemeProps {
    className?: string;
}

export const ToggleTheme = (props: ToggleThemeProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <button type="button" className={cn(style.ToggleTheme, {}, [className])} onClick={toggleTheme}>
            {theme === ThemeEnum.LIGHT ? <LightIcon /> : <DarkIcon />}
        </button>
    );
};
