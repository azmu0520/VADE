import React, { Component } from 'react';
import { Wrap, MenuBar, NavLink } from './style';
export default class SubNav extends Component {
  render() {
    return (
      <Wrap>
        <MenuBar>
          <MenuBar.Icon /> All Collections
        </MenuBar>

        <NavLink.Wrap>
          <div>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
            <NavLink>Home</NavLink>
          </div>
        </NavLink.Wrap>
      </Wrap>
    );
  }
}
