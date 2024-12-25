import React from 'react';
import { cn } from 'shared/utils';
import * as style from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo = (props: LogoProps) => {
    const { className } = props;
    return <div className={cn(style.Logo, {}, [className])}>LOGO</div>;
};
