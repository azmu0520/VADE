import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Menu } from '../../assets/icons/hamburger.svg';
import { Link } from 'react-router-dom';

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
Wrap.Link = styled(Link)`
  font-weight: 700;
  font-size: 22px;
  line-height: 133.4%;
  letter-spacing: 0.005em;
  text-decoration: none;
  padding: 20px 40px;
  color: ${({ active }) => (active === 'true' ? '#12B7B6' : '#545454')};
  border-radius: ${({ active }) => (active === 'true' ? '15px' : '')};
  box-shadow: ${({ active }) =>
    active === 'true'
      ? '-10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.09)'
      : ''};
`;

Wrap.Ul = styled.ul`
  width: 50%;
  margin-left: auto;
  display: flex;
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
  .inactive {
    /* text-decoration: none; */
  }
  .active {
    text-decoration: none;
  }
`;

Wrap.Menu = styled(Menu)`
  width: 30px;
  height: 24px;
`;
