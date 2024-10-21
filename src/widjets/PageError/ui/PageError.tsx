import React from 'react';
import { cn } from 'shared/utils';
import { useTranslation } from 'react-i18next';
import * as style from './PageError.module.scss';

export const PageError = () => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={cn(style.PageError)}>
            {t('Похоже, что-то пошло не так!')}
            <button type="button" onClick={reloadPage}>
                {t('Обновить страницу')}
            </button>
        </div>
    );
};
