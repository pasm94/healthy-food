import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
  min-height: 672px;

  background-image: url('/components/LandingPage/JoinOurMembership/bloco_final_image.svg');
  background-repeat: no-repeat;
  background-position: right 0;

  @media (max-width: 1120px) {
    margin-left: 5rem;
    background-size: 30rem;
    min-height: 30rem;
  }
  @media (max-width: 960px) {
    margin-left: 5rem;
    background-size: 25rem;
    min-height: 25rem;
  }

  @media (max-width: 900px) {
    margin-left: 5rem;
    background-size: 18rem;
    min-height: 18rem;
  }

  @media (max-width: 790px) {
    background-image: none;
    min-height: 0;
  }

  background-color: white;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  margin-left: 12%;

  @media (max-width: 1280px) {
    margin-left: 5rem;
  }

  @media (max-width: 1180px) {
    margin-left: 2rem;
  }

  @media (max-width: 790px) {
    margin: auto;
  }

  @media (max-width: 430px) {
    margin-left: -2.5rem !important;
  }

  h1 {
    color: #1d164d;
    font-size: 2rem;
    /* line-height: 4rem; */
    width: 25rem;
  }

  span#search {
    display: flex;

    margin-top: 1.5rem;

    input {
      padding: 1rem;
      @media (max-width: 430px) {
        width: 18rem;
      }
    }

    button {
      width: 6rem;
      border-radius: 5px;
      margin-left: 1rem;
    }
  }
`;
