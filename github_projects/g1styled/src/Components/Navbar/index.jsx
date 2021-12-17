import React, { Component } from 'react';
import { Wrap } from './style';
export default class index extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Logo>
          <Wrap.LogoIcon /> FRUNINKING
        </Wrap.Logo>
        <Wrap.Input />{' '}
        <Wrap.Select>
          <option value='Category'> Category</option>
          <option value='Category'> Category</option>
          <option value='Category'> Category</option>
          <option value='Category'> Category</option>
        </Wrap.Select>
        <Wrap.IconContainer>
          <Wrap.Bang />
          <Wrap.Case />
          <Wrap.User />
        </Wrap.IconContainer>
      </Wrap>
    );
  }
}
