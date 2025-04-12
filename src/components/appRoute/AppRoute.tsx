import { AppRouteConfig } from 'src/index.config';

import ActiveTabProvider from '../activeTabProvider';
import NavBar from '../navBar';
import ThemeContextProvider from '../themeContextProvider';

const AppRoute = ({ render }: AppRouteConfig) => {
  return (
    <ThemeContextProvider>
      <ActiveTabProvider>
        <NavBar />
        {render()}
      </ActiveTabProvider>
    </ThemeContextProvider>
  );
};

export default AppRoute;
