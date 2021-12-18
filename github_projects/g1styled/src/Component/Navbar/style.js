import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Notification } from '../../assets/icons/Notification.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Case } from '../../assets/icons/basket.svg';

const common = css`
  width: 20px;
  height: 20px;
  margin-right: 30px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 67px;
  width: 100%;
  /* margin: 0 250px; */
`;

Wrap.LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 170px;
`;

Wrap.Logo = styled(Logo)`
  width: 31px;
  height: 38px;
  margin-right: 6px;
`;

Wrap.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
`;

Wrap.Input = styled.input`
  width: 403px;
  height: 46px;
  border: 2px solid #7ac751;
  border-radius: 8px;
  border-right: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

Wrap.Select = styled.select`
  border: 2px solid #7ac751;
  /* border-radius: 8px; */
  border-left: 1.5px solid rgba(227, 227, 227, 0.78);
  border-right-width: 0px;
  height: 46px;
  background-color: #fff;
  width: 123px;
  outline: none;
`;

Wrap.SearchIcon = styled.div`
  width: 55px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7ac751;
  border-radius: 0px 7px 6px 0px;
`;

Wrap.Search = styled(Search)`
  ${common}
  margin: 0;
`;

Wrap.IconWrap = styled.div`
  display: flex;
  align-content: center;
  margin-left: 300px;
`;

Wrap.Notification = styled(Notification)`
  ${common}
`;
Wrap.User = styled(User)`
  ${common}
`;
Wrap.Case = styled(Case)`
  ${common}
`;
