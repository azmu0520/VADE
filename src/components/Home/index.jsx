import React from 'react';
import { Wrap } from './style';
import home from '../../assets/image/home.png';
import Card from '../Card';
const Home = () => {
  return (
    <>
      <Wrap>
        <Wrap.Wrap>
          <Wrap.Title>
            We Help You Building The Dreams & Bring More Than You Expect
          </Wrap.Title>
          <div style={{ position: 'relative' }}>
            <Wrap.Input placeholder='Search Properties' />

            <Wrap.Search />
          </div>
        </Wrap.Wrap>
        <Wrap.Img src={home} />
      </Wrap>
      <Card />
    </>
  );
};

export default Home;
