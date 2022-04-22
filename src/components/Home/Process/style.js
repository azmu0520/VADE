import styled from 'styled-components';
import { ReactComponent as Dots } from '../../../assets/icons/dots.svg';
import { ReactComponent as Border } from '../../../assets/icons/border.svg';
import { ReactComponent as HalfB } from '../../../assets/icons/half-border.svg';
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
`;

Wrap.Title = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 56px;
  line-height: 141.9%;
  /* or 79px */

  color: #1f1f1f;
`;

Wrap.P = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 150.4%;
  letter-spacing: 0.03em;
  color: #1f1f1f;
`;

Wrap.Wrap = styled.div`
  display: flex;
  align-items: center;
`;
Wrap.Box = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

Wrap.Dots = styled(Dots)`
  position: absolute;
  top: ${({ bottom }) => (bottom === 'true' ? '' : '0')};
  bottom: ${({ bottom }) => (bottom === 'true' ? '0' : '')};
  left: 50%;
  transform: rotate(-5deg);
  transform: ${({ bottom }) =>
    bottom === 'true'
      ? 'translateX(-50%) rotate(176deg)'
      : 'translateX(-50%) rotate(-5deg)'};
`;

Wrap.Border = styled(Border)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) rotate(5deg);
  /* transform: rotate(-5deg); */
`;

Wrap.HalfB = styled(HalfB)`
  position: absolute;
  top: 103px;
  transform: rotate(8deg);
`;
