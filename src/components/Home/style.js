import styled from 'styled-components';
import { ReactComponent as search } from '../../assets/icons/search.svg';
export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding-left: 100px;
`;
Wrap.Wrap = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
`;

Wrap.Title = styled.h2`
  font-weight: 400;
  font-size: 54px;
  line-height: 141.9%;
  color: #434343;
  padding-right: 20px;
`;

Wrap.Img = styled.img``;

Wrap.Input = styled.input`
  margin-top: 100px;
  width: 45%;
  border: none;
  font-weight: 700;
  font-size: 26px;
  padding: 25px 50px 25px 50px;
  line-height: 133.4%;
  letter-spacing: 0.005em;
  color: #12b7b6;
  outline: none;
  background: #f9f9f9;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  ::placeholder {
    color: #12b7b6;
  }
`;

Wrap.Search = styled(search)`
  position: absolute;
  bottom: 25px;
  right: 240px;
`;
