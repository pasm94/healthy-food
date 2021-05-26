import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  max-width: 1366px;
  min-height: 727px;

  background-image: url('/components/LandingPage/TheBestServices/bloco_services.svg');
  background-repeat: no-repeat;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: white;

  @media (max-width: 1020px) {
    background-image: none;
    justify-content: center;
    background-color: #fafafc;
    min-height: 0;
  }
`;

export const Content = styled.div`
  width: 26rem;
  height: 28.5rem;

  margin-right: 15rem;

  @media (max-width: 1300px) {
    margin-right: 10rem;
  }

  @media (max-width: 1200px) {
    margin-right: 4rem;
  }

  @media (max-width: 1020px) {
    margin-right: 0;
  }

  display: flex;
  flex-direction: column;

  h1 {
    color: #1d164d;
    font-size: 2rem;
    font-weight: bold;
    line-height: 3rem;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 2rem;

    color: #9e9baf;
    font-family: 'Mulish', sans-serif;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.7rem;
  }

  button {
    margin-top: 1rem;
  }
`;
