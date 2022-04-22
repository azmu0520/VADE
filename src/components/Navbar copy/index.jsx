import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Wrap } from './style';
import { data } from '../../utilites/navbar';
const Navbar = () => {
  return (
    <Wrap>
      <Wrap.Nav>
        <Wrap.Logo />

        <Wrap.Ul>
          {data.map((item) => (
            <NavLink className='nav' to={item.path}>
              <Wrap.Li key={item.id}> {item.title} </Wrap.Li>
            </NavLink>
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
