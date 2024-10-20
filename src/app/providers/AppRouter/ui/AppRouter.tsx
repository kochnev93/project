import React, { Suspense } from 'react';
import { routerConfig } from 'shared/config/routesConfig';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/Loaders';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routerConfig).map(({ element, path }) => (
                    <Route {...{ key: path, path }} element={<div className="page-wrapper">{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
};
