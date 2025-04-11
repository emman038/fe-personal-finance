import { Routes, Route } from 'react-router-dom';
import AppRoute from 'src/components/appRoute';
import { RoutesConfig } from 'src/index.config';

import Expense from './expense';
import Income from './income';
import paths from './paths';
import PlaceHolderHomePage from './placeHolderHomePage';
import PlaceHolderNotFound from './placeHolderNotFound';

const routesConfig = (): RoutesConfig[] => [
  {
    path: paths.HOME_PAGE,
    render: () => <PlaceHolderHomePage />,
  },
  {
    path: paths.INCOME,
    render: () => <Income />,
  },
  {
    path: paths.EXPENSE,
    render: () => <Expense />,
  },
];

function App() {
  return (
    <Routes>
      {routesConfig().map(({ path, render }) => (
        <Route key={path} path={path} element={<AppRoute render={render} />} />
      ))}
      <Route path="*" element={<PlaceHolderNotFound />} />
    </Routes>
  );
}

export default App;
