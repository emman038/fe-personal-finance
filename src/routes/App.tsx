import { Routes, Route } from 'react-router-dom';
import AppRoute from 'src/components/appRoute';
import { RoutesConfig } from 'src/index.config';

import Income from './income';
import PlaceHolderHomePage from './placeHolderHomePage';
import PlaceHolderNotFound from './placeHolderNotFound';

const routesConfig = (): RoutesConfig[] => [
  {
    path: '/',
    render: () => <PlaceHolderHomePage />,
  },
  {
    path: '/income',
    render: () => <Income />,
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
