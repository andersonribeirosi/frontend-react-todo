// Instalado via npm install styled-components
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #20295f;
  display: flex;
  border-bottom: 3px solid #ee6b26;
`;
export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  img {
    width: 100px;
    height: 40px;
  }
`;
export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  align-items: center;
  justify-content: flex-end;
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    margin: 0 10px;
    &:hover {
      color: #ee6b26;
    }
  }
  #notification {
    img {
      width: 25px;
      height: 30px;
    }

    span {
      background: #fff;
      color: #ee6b26;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }
    &:hover {
      opacity: 0.6;
    }
  }
  .dividir::after {
    color: white;
    margin: 0 10px;
    content: '|';
  }
`;
