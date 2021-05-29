import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  min-width: 100%;
  min-height: 768px;

  @media (max-width: 1120px) {
    min-height: 700px;
  }

  @media (max-width: 1020px) {
    margin-top: 8rem;
  }

  @media (max-width: 790px) {
    min-height: 640px;
  }

  @media (max-width: 720px) {
    min-height: 600px;
  }

  @media (max-width: 480px) {
    min-height: 560px;
  }

  padding-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    h1 {
      text-align: center;
      color: #1d164d;
      font-size: 2rem;
      font-weight: bold;
      line-height: 3rem;
      margin-bottom: 8px;
    }

    p {
      text-align: center;

      margin-bottom: 8px;

      color: #9e9baf;
      font-family: 'Mulish', sans-serif;
      font-weight: normal;
      font-size: 1rem;
    }
  }
`;

export const Posts = styled.div`
  /* display: flex; */
  /* width: 100%; */
  div {
    max-width: 372px;
  }
`;
