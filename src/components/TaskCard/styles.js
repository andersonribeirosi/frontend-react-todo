import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 10px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  strong {
    color: #ee6b26;
    font-weight: bold;
  }

  span {
    color: #707070;
  }
`;
