import { Outlet } from 'react-router-dom';

import './styles.scss';

const BaseLayout = () => {
  return (
    <div className="base-layout">
      <Outlet />
    </div>
  );
};

export default BaseLayout;
