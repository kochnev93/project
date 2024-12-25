import React, { Suspense } from 'react';
import { cn } from 'shared/utils';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';
import { Header } from 'widjets/Header';
import { Navbar } from 'widjets/Navbar';
import { PageLoader } from 'shared/ui/Loaders';
import './styles/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusNavbar } from 'entities/Settings';

export const App = (): React.ReactElement => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const navbarIsOpen = useSelector(getStatusNavbar);

    return (
        <div className={cn('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <div className={cn('main-container', { compact: navbarIsOpen }, [])}>
                    <Navbar />
                    <div className="app-container">
                        <Header />
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};
