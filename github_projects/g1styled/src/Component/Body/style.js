import styled from 'styled-components';
export const Wrap = styled.div`
  display: flex;
  box-sizing: border-box;
`;

Wrap.Section = styled.div`
  flex: 1;
  height: 545px;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-left: 10px;
`;

Wrap.Links = styled.div`
  width: 100%;
  height: 40px;
  background: #f7f8fa;
  border-bottom: ${({ border }) => (!border ? '0.8px solid #E3E3E3' : '0px')};
`;

Wrap.Content = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  margin: 12px 0 0 12px;
  background: linear-gradient(
    103.4deg,
    rgba(241, 250, 255, 0.88) 0.89%,
    #f1faff 101.61%
  );
  backdrop-filter: blur(155px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 1px;
`;

Wrap.Left = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 47px;
  .top {
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    /* or 118% */

    letter-spacing: 0.05em;

    /* Main Color */

    color: #7ac751;
  }
  .serve {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    margin: 10px 0 27px 0;
    color: #2f2f2f;
  }
  .product {
    font-weight: 600;
    font-size: 27px;
    line-height: 26px;
    /* or 96% */

    color: rgba(81, 81, 81, 0.71);
  }

  button {
    width: 120px;
    height: 46px;
    background: #7ac751;
    border-radius: 5px;
    margin-top: 20px;
    border: none;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    color: #ffffff;
  }
`;

Wrap.Kreslo = styled.img`
  width: 374px;
  height: 374px;
`;

Wrap.Card = styled.div`
  width: 98px;
  height: 91px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.56) 100%
  );
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  .number {
    font-weight: 500;
    font-size: 7px;
    line-height: 26px;
    /* identical to box height, or 371% */

    display: flex;
    align-items: center;

    /* Main Color */

    color: #7ac751;
  }
  .ofis {
    font-weight: 500;
    font-size: 7px;
    line-height: 26px;
    /* or 371% */

    display: flex;
    align-items: center;

    /* Primary */

    color: #555555;
  }
`;

Wrap.CarImg = styled.img`
  width: 50px;
  height: 43px;
`;
