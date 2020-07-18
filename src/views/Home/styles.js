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
  /* position: absolute; */

  button {
    border: none !important;
    background: none !important;
    outline-style: none !important;
  }
`;
