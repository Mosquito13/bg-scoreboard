import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import MainPage from './common/pages/Main';
import BaseLayout from './common/layouts/Base';
import NotFoundPage from './common/pages/NotFound';
import ArboretumMainPage from './arboretum/pages/Main';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/game/arboretum" element={<ArboretumMainPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
