import { APP_STYLING, mantineTheme } from './AppStyling';
import { Header } from './components/Header/Header';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from './models/AppRoutes';

/**
 * This is the main component of the application.
 */
export function App(): React.ReactElement {
  return (
    <div style={APP_STYLING.rootStyles}>
      <MantineProvider theme={mantineTheme}>
        <Header />
        <div style={APP_STYLING.contentStyles}>
          <Routes>
            <Route path={AppRoutes.HOME} element={<div>Home</div>} />

            {/* Page Not Found */}
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </MantineProvider>
    </div>
  );
}
