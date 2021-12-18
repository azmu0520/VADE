import React, { Component } from 'react';
import { Wrap } from './style';
import kreslo from '../../assets/img/kreslo.png';
import kreslo2 from '../../assets/img/Rectangle.png';

const data = [
  {
    name: 'Sardor',
  },
  {
    name: 'Sardor',
  },
  {
    name: 'Sardor',
  },
  {
    name: 'Sardor',
  },
  {
    name: 'Sardor',
  },
  {
    name: 'Sardor',
  },
  {
    name: 'Sardor',
  },
  {
    name: 'Sardor',
  },
  {
    name: 'Sardor',
  },
];
export default class Body extends Component {
  render() {
    return (
      <Wrap>
        <Wrap.Section>
          <Wrap.Links>About</Wrap.Links>
          <Wrap.Links>About</Wrap.Links>
          <Wrap.Links>About</Wrap.Links>
          <Wrap.Links>About</Wrap.Links>
          <Wrap.Links>About</Wrap.Links>
          <Wrap.Links>About</Wrap.Links>
          <Wrap.Links>About</Wrap.Links>
          <Wrap.Links border>About</Wrap.Links>
        </Wrap.Section>
        <Wrap.Content>
          <Wrap.Left>
            <div className='top'>TOP COLLECTIONS 2022</div>
            <div className='serve'>We Serve Your Dream Furniture</div>
            <div className='product'>Get 50% off all products</div>
            <button>Save</button>
          </Wrap.Left>
          <Wrap.Kreslo src={kreslo} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Wrap.Card>
              {' '}
              <Wrap.CarImg src={kreslo2} />
              <div className='number'>120$</div>
              <div className='ofis'>My Ofice</div>
            </Wrap.Card>
            <Wrap.Card>
              <Wrap.CarImg src={kreslo2} />
              <div className='number'>120$</div>
              <div className='ofis'>My Ofice</div>
            </Wrap.Card>
            <Wrap.Card>
              <Wrap.CarImg src={kreslo2} />
              <div className='number'>120$</div>
              <div className='ofis'>My Ofice</div>
            </Wrap.Card>
          </div>
        </Wrap.Content>
      </Wrap>
    );
  }
}
