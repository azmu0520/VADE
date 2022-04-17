import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icons/double-arrow.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import lodha from '../../assets/image/slide-home.png';

export const Wrap = styled.div``;

Wrap.Swiper = styled.div`
  .swiper {
    padding: 70px 0 70px 70px;
  }
  margin: 30px 0 130px 30px;
`;
Wrap.SwiperSlide = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #f3f3f3;
  box-shadow: -20px -20px 50px #ffffff, 20px 20px 50px #d2d2d2;
  border-radius: 43px;
  width: 430px;
  height: 592px;
  margin-right: 100px;
  padding: 80px 50px 44px 50px;
  .prestige {
    width: 189px;
    margin-bottom: 15px;
    margin-top: -60px;
  }
  .brigade {
    width: 194px;
    margin-top: -60px;
    margin-bottom: 15px;
  }
  .sobh {
    width: 125px;
    height: 182.61px;
    margin-top: -35px;
    margin-bottom: 15px;
  }
`;

Wrap.Img = styled.img`
  width: 100%;
  margin-bottom: 85px;
`;

Wrap.Title = styled.h3`
  font-weight: 700;
  font-size: 26px;
  line-height: 0;
  letter-spacing: 0.005em;
  color: #1f1f1f;
`;

Wrap.P = styled.p`
  font-weight: 400;
  font-size: 26px;
  line-height: 0;
  letter-spacing: 0.005em;
  color: #1f1f1f;
`;
Wrap.Link = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 0;
  letter-spacing: 0.005em;
  color: #12b7b6;
`;

Wrap.Button = styled.div`
  display: flex;
  margin-top: 50px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 328px;
  height: 85px;
  background: #f9f9f9;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 42.5px;
  font-weight: 700;
  font-size: 22px;
  line-height: 133.4%;
  letter-spacing: 0.005em;
  color: #12b7b6;
`;

Wrap.Btn = styled.div`
  margin-left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;

  height: 65px;
  background: #f9f9f9;
  box-shadow: inset -10px -10px 20px #ffffff,
    inset 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 42.5px;
`;

Wrap.Arrow = styled(Arrow)``;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.09);
  border-radius: 45px;
  margin: 0 100px;
  height: 312px;
`;
Filter.Wrap = styled.div`
  width: 85%;
  display: flex;
  box-sizing: border-box;
  flex-direction: ${({ type }) => (type === 'column' ? 'column' : '')};
  margin: ${({ type }) => (type === 'column' ? '0' : '45px 0 20px 50px')};
  /* align-items: center; */
`;

Filter.Input = styled.input`
  background: #f9f9f9;
  width: 56%;
  height: 63px;
  outline: none;
  border: none;
  box-shadow: inset -10px -10px 20px #ffffff,
    inset 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 42.5px;
  padding: 10px 40px;
  ::placeholder {
    font-weight: 500;
    font-size: 22px;
    line-height: 141.9%;
    color: #b0b0b0;
  }
`;

Filter.Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 133.4%;
  letter-spacing: 0.005em;
  color: #545454;
  padding: 0 40px;
  white-space: nowrap;
`;

Filter.Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 83px;
  align-items: center;
  background: #f9f9f9;
  box-shadow: inset -10px -10px 20px #ffffff,
    inset 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 42.5px;

  span {
    /* padding: 0 20px; */
    font-weight: 500;
    font-size: 22px;
    line-height: 141.9%;
    color: #b0b0b0;
    margin: 0 auto;
  }
`;

Filter.Btn = styled.div`
  width: 76px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.18),
    inset 20px 20px 50px rgba(255, 255, 255, 0.25),
    inset -20px -20px 50px #cdcdcd, inset 20px 20px 50px #ffffff;
  border-radius: 166px;
  position: relative;
  color: #12b7b6;
  font-weight: 700;
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    border: 3px solid #12b7b6;
    transform: translate(-50%, -50%);
  }
  ::after {
    content: '';
    display: ${({ minus }) => (minus === 'true' ? 'none' : 'block')};
    position: absolute;
    top: 50%;
    left: 50%;
    height: 28px;
    border: 3px solid #12b7b6;
    /* transform: rotate(-270deg); */
    transform: translate(-50%, -50%);
  }
`;

Filter.Search = styled.div`
  width: 128px;
  height: 128px;
  background: #f3f3f3;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.18),
    inset 20px 20px 50px rgba(255, 255, 255, 0.25),
    inset -20px -20px 50px #cdcdcd, inset 20px 20px 50px #ffffff;
  border-radius: 166px;
  position: relative;
  cursor: pointer;
  margin-right: 50px;
`;
Filter.Swipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 80px;
  background: #f9f9f9;
  box-shadow: inset -10px -10px 20px #ffffff,
    inset 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 42.5px;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

Filter.SearchBtn = styled(Search)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 47px;
  height: 52px;
`;

Filter.CheckBox = styled.div`
  width: 170px;
  height: 83px;
  background: #f9f9f9;
  box-shadow: inset -10px -10px 20px #ffffff,
    inset 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 42.5px;
`;

Filter.Check = styled.div`
  width: 76px;
  height: 76px;
  background: #f3f3f3;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.18),
    inset 20px 20px 50px rgba(255, 255, 255, 0.25),
    inset -20px -20px 50px #cdcdcd, inset 20px 20px 50px #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ check }) => (check ? 'auto' : '')};
`;

Filter.CheckBtn = styled(Check)`
  path {
    stroke: ${({ check }) => (check ? '#12b7b6' : '')};
  }
`;

Filter.Advance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  height: 83px;
  background: #f9f9f9;
  box-shadow: -10px -10px 20px #ffffff, 10px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 42.5px;
  font-weight: 700;
  font-size: 22px;
  line-height: 133.4%;
  /* or 29px */
  cursor: pointer;
  margin-left: 70px;
  letter-spacing: 0.005em;

  color: #cdcdcd;
`;

export const Houses = styled.div`
  display: flex;
  min-width: 100%;
  margin: 190px 0;
  height: 1000px;
`;

Houses.Each = styled.div`
  display: flex;
  background-image: ${({ home }) =>
    home
      ? `
  linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${home})
  `
      : ''};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: ${({ width, real }) => (width === real ? '60%' : '20%')};
  transition: all 0.7s ease;
  position: relative;
  .layer {
    background-color: ${({ width, real }) =>
      width === real ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.8)'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  /* z-index: -2; */
`;

Houses.Layer = styled.div``;

Houses.Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 323px;
`;

Houses.Title = styled.h1`
  font-weight: 700;
  font-size: 35px;
  line-height: 0;
  letter-spacing: 0.005em;
  color: #ffffff;
`;
Houses.P = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 0;
  letter-spacing: 0.005em;
  color: #ffffff;
`;
Houses.Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;
Houses.Li = styled.li``;
