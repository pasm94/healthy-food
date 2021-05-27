import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  width: 21.75rem;
  height: 28.125rem;
  background-color: white;

  cursor: pointer;
`;

export const Content = styled.div`
  padding-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
  img {
    height: 15.43rem;
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    color: #1d164d;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
  }

  span {
    margin-left: 2rem;
    height: 52px;

    display: flex;
    /* align-items: center; */

    img {
      width: 52px;
      height: 52px;
      border-radius: 50%;
    }

    p {
      margin-top: 15px;
      margin-left: 8px;
      color: #9e9baf;
      font-family: 'Mulish', sans-serif;
      font-weight: normal;
      font-size: 1rem;
    }
  }
`;
