import styled from 'styled-components';

export const Wrap = styled.div`
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 454px;
  justify-content: flex-start;
`;

Wrap.Item = styled.div`
  padding: 10px;

  border: 0.8px solid #e3e3e3;
  height: 40px;
  width: 100%;
  border-bottom: ${({ border }) => border === 'true' && 'none'};
`;
