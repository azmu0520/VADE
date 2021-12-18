import styled from 'styled-components';
import { ReactComponent as Menu } from '../../assets/icons/hamburbeer.svg';
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 67px;
  background: #f7f8fa;
  margin-top: 25px;
`;

export const MenuBar = styled.div`
  background: #7ac751;
  flex: 1;
  height: 67px;
  font-style: normal;
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

MenuBar.Icon = styled(Menu)`
  width: 20px;
  height: 20px;
`;

export const NavLink = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #555555;
`;

NavLink.Wrap = styled.div`
  flex: 5;

  display: flex;
  div {
    width: 55%;
    display: flex;
    padding-left: 20px;

    /* align-items: center; */
  }
`;
