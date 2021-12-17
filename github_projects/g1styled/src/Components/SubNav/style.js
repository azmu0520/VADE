import styled from 'styled-components';
import { ReactComponent as Menu } from '../../assets/icons/menu.svg';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 67px;
  width: 100%;
  background: #f7f8fa;
`;

export const Button = styled.div`
  width: 260px;
  height: 67px;
  background: #7ac751;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* identical to box height */

  letter-spacing: 0.02em;

  color: #ffffff;
`;
export const MenuIcon = styled(Menu)`
  width: 12px;
  height: 13px;

  path {
    fill: #fff;
  }
`;

export const Title = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: ${({ color }) => (color === 'true' ? 'red' : '#000')};
`;

Title.Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 55%;
`;
