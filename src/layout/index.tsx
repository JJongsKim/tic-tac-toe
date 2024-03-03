import { Outlet } from 'react-router-dom';

import { ContentWrap, LayoutWrap } from './style';

const Layout = () => {
  return (
    <LayoutWrap>
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </LayoutWrap>
  );
};

export default Layout;
