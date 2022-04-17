import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Menu } from '../../assets/icons/hamburger.svg';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
Wrap.Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 75px 100px;
`;

Wrap.Logo = styled(Logo)`
  width: 120px;
  height: 133px;
`;

Wrap.Ul = styled.ul`
  width: 50%;
  margin-left: auto;
  display: flex;
  .nav {
    text-decoration: none;
  }
  align-items: center;
  list-style-type: none;
  justify-content: space-between;
`;

Wrap.Li = styled.li`
  cursor: pointer;
  letter-spacing: 0.005em;
  color: #646464;
  font-weight: 700;
  font-size: 22px;
`;

Wrap.Menu = styled(Menu)``;
