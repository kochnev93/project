import React from 'react';
import { cn } from 'shared/utils';
import * as style from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}
export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;
    return (
        <div className={cn(style.PageLoader, {}, [className])}>
            <div className={style.loader} />
        </div>
    );
};
