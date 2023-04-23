import { APP_STYLING, mantineTheme } from './AppStyling';
import { Header } from './components/Header/Header';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from './models/AppRoutes';
import { HomePage } from './components/pages/Home/HomePage';
import { AccountPage } from './components/pages/Account/AccountPage';
import { NotFoundPage } from './components/pages/NotFound/NotFoundPage';
import { RoutePlanningPageRoot } from './components/pages/RoutePlanning/RoutePlanningPageRoot';
import { TicketSuccessPage } from './components/pages/PurchaseHandling/TicketSuccessPage';
import { TicketCanceledPage } from './components/pages/PurchaseHandling/TicketCanceledPage';
import { ViewTicketsPage } from './components/pages/Account/ViewTicketsPage';
import { useRecoilValue } from 'recoil';
import { currentlyLoggedInUserState } from './recoil/atoms/AuthenticationAtom';

/**
 * This is the main component of the application.
 */
export function App(): React.ReactElement {
    const currentlyLoggedInUser = useRecoilValue(currentlyLoggedInUserState);

    return (
        <div style={APP_STYLING.rootStyles}>
            <MantineProvider theme={mantineTheme}>
                <Header />
                <div style={APP_STYLING.contentRootStyles}>
                    <Routes>
                        <Route
                            path={AppRoutes.HOME}
                            element={<HomePage />}
                        />
                        <Route
                            path={AppRoutes.ROUTE_PLANNING}
                            element={<RoutePlanningPageRoot />}
                        />
                        <Route
                            path={AppRoutes.TICKET_SUCCESS}
                            element={<TicketSuccessPage />}
                        />
                        <Route
                            path={AppRoutes.TICKET_CANCELED}
                            element={<TicketCanceledPage />}
                        />
                        {currentlyLoggedInUser && (
                            <>
                                <Route
                                    path={AppRoutes.ACCOUNT_PAGE}
                                    element={<AccountPage />}
                                />
                                <Route
                                    path={AppRoutes.VIEW_TICKETS}
                                    element={<ViewTicketsPage />}
                                />
                            </>
                        )}

                        {/* Page Not Found */}
                        <Route
                            path='*'
                            element={<NotFoundPage />}
                        />
                    </Routes>
                </div>
            </MantineProvider>
        </div>
    );
}
