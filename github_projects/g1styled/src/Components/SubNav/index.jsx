import React, { Component } from 'react';
import { Wrapper, Button, MenuIcon, Title } from './style';

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Button>
          <MenuIcon /> ALL COLLECTIONS
        </Button>
        <Title.Wrap>
          <Title>Home</Title>
          <Title>About</Title>
          <Title>About</Title>
          <Title>About</Title>
          <Title>About</Title>
        </Title.Wrap>
      </Wrapper>
    );
  }
}
