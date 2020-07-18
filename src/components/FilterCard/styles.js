import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 40px;
  padding: 10px;
  background: ${(props) => (props.actived ? '#ee6b26' : '#20295f')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
  }
  &:hover {
    background: #ee6b26;
  }
`;
