import React from 'react';
import { useTranslation } from 'react-i18next';
import { userApi } from 'entities/User';

function About() {
    const { t } = useTranslation('about');
    const { data } = userApi.useGetPostsQuery();
    return (
        <div>
            {t('О сайте')}
            {JSON.stringify(data)}
        </div>
    );
}

export default About;
