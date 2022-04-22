import React from 'react';
import { Wrap } from './style';

const Process = () => {
  return (
    <Wrap>
      <Wrap.Title>Property Selection Process</Wrap.Title>
      <Wrap.P>
        Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Wrap.P>
      <Wrap.Wrap>
        <Wrap.Box>
          1
          <Wrap.Dots />
          <Wrap.Border />
        </Wrap.Box>
        <Wrap.Box>
          <Wrap.Dots bottom='true' />
          <Wrap.HalfB />
        </Wrap.Box>
        <Wrap.Box>3</Wrap.Box>
      </Wrap.Wrap>
    </Wrap>
  );
};

export default Process;
