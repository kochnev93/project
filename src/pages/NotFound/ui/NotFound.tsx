import React from 'react';
import { cn } from 'shared/utils';
import { useTranslation } from 'react-i18next';
import * as style from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}
export const NotFound = (props: NotFoundProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return <div className={cn(style.NotFound, {}, [className])}>{t('Страница не найдена')}</div>;
};
