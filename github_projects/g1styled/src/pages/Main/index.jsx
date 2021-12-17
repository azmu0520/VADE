import React, { Component } from 'react';
import Navbar from '../Navbar';
import SubNav from '../../Components/SubNav';
import { Wrapper } from './style';
export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <SubNav />
      </Wrapper>
    );
  }
}
