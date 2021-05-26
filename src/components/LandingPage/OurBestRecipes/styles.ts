import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
  /* width: 1366px; */
  /* height: 768px; */
`;

// export const Content = styled.div`
//   width: 100%;
//   display: flex;
// `;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  h3 {
    color: #1d164d;
    font-size: 2rem;
    font-weight: bold;
  }

  h5 {
    margin-top: 1rem;
    color: #9e9baf;
    font-family: 'Mulish', sans-serif;
    font-weight: normal;
    text-align: center;
    font-size: 1rem;
    line-height: 1.7rem;
  }
`;

export const Cards = styled.div`
  max-width: 68rem;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    margin-bottom: 2rem;
    margin: 8px;
  }
`;
