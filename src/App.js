import { Provider } from 'react-redux';
import { Navigate, Routes, Route, HashRouter } from 'react-router-dom';

import NotFoundPage from './common/pages/NotFound';
import BaseLayout from './common/layouts/Base';
import MainPage from './common/pages/Main';
import store from './store';

import gamesMapping from './mapping/games';

const buildGameRoutes = () => {
  const routes = [];

  Object.keys(gamesMapping).forEach((key) => {
    const routesMapping = gamesMapping[key].routes;

    routesMapping.forEach(({ path, Cmp }) => {
      routes.push(
        <Route key={path} path={path} element={<Cmp />} />
      )
    });
  });

  return routes;
};

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<MainPage />} />
          {buildGameRoutes()}
          <Route path="not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="not-found" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);

export default App;
