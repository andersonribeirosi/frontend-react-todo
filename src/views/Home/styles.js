import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilterArea = styled.div`
  width: 100%;
  /* max-width: 100% !important; */
  min-width: 100% !important;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  button {
    border: none !important;
    background: none !important;
    outline-style: none !important;
    margin: 2px; // testando
  }
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 2px solid #20295f;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 2px;
  h3 {
    color: #20295f;
    position: relative;
    top: 30px;
    background: #fff;
    padding: 0 20px;
  }
`;
