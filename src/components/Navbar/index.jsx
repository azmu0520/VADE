import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Wrap } from './style';
import { data } from '../../utilites/navbar';
const Navbar = () => {
  const location = useLocation();
  return (
    <Wrap>
      <Wrap.Nav>
        <Wrap.Logo />

        <Wrap.Ul>
          {data.map((item) => (
            <Wrap.Li key={item.id}>
              <Wrap.Link
                active={(location?.pathname === item.path).toString()}
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                {item.title}
              </Wrap.Link>
            </Wrap.Li>
          ))}
          <Wrap.Li>
            <Wrap.Menu />
          </Wrap.Li>
        </Wrap.Ul>
      </Wrap.Nav>
      <Outlet />
    </Wrap>
  );
};

export default Navbar;
