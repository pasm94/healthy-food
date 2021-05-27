import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 103px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 9rem;
  padding-right: 9rem;
  font-family: 'Mulish', sans-serif;
  font-size: 1rem;

  color: #1d164d;
  span {
    color: #9e9baf;

    p {
      cursor: pointer;
    }
    display: flex;
    p + p {
      margin-left: 3rem;
    }
  }

  @media (max-width: 920px) {
    padding-top: 3rem;
    padding-bottom: 2rem;
    flex-direction: column;
    justify-content: center;
    span {
      margin-top: 8px;
    }
    padding-left: 0rem;
    padding-right: 0rem;
  }

  @media (max-width: 480px) {
  }

  @media (max-width: 360px) {
  }
`;
