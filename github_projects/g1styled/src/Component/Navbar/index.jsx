import React, { Component } from 'react';
import { Wrap } from './style';

export default class Navbar extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.LogoWrap>
          <Wrap.Logo /> <Wrap.Title>Furniking</Wrap.Title>
        </Wrap.LogoWrap>
        <Wrap.Input placeholder='Search for product' />
        <Wrap.Select>
          <option value='Select'>Select</option>
          <option value='Select'>Select</option>
          <option value='Select'>Select</option>
          <option value='Select'>Select</option>
        </Wrap.Select>
        <Wrap.SearchIcon>
          <Wrap.Search />
        </Wrap.SearchIcon>
        <Wrap.IconWrap>
          <Wrap.Notification />
          <Wrap.User />
          <Wrap.Case />
        </Wrap.IconWrap>
      </Wrap>
    );
  }
}
