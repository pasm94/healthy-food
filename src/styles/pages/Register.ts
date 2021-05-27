import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('/components/LandingPage/JoinOurMembership/bloco_final_image.svg');
  background-repeat: no-repeat;
  background-position: right 0;

  @media (max-width: 890px) {
    background-size: 40rem;
  }

  @media (max-width: 790px) {
    background-size: 30rem;
  }

  @media (max-width: 594px) {
    background-size: 20rem;
  }

  max-width: 100vw;
  height: 85vh;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;

  /* align-items: center; */
  margin-left: 10rem;

  @media (max-width: 594px) {
    margin-left: 5rem;
  }
  max-width: 1366px;

  h1 {
    margin-bottom: 1rem;
    margin-top: 3rem;
    @media (max-width: 594px) {
      margin-top: 7rem;
    }
    @media (max-width: 480px) {
      margin-top: 10rem;
    }
    @media (max-width: 360px) {
      margin-top: 13rem;
    }

    color: #1d164d;
    font-size: 2rem;
  }

  h2 {
    margin-top: 2rem;
    color: red;
    font-family: 'Mulish', sans-serif;
    font-size: 1.2rem;
  }

  h3 {
    margin-top: 2rem;
    color: green;
    font-family: 'Mulish', sans-serif;
    font-size: 1.2rem;
  }

  span {
    /* margin-left: auto; */
    /* margin-right: 15rem; */

    font-size: 1.3rem;
    display: flex;
    align-items: center;

    a {
      margin-left: 1rem;
      text-decoration: line-through;
      color: #1d164d;
      font-family: 'Mulish', sans-serif;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

export const Form = styled.form`
  label {
    color: #1d164d;
    font-size: 1.1rem;
    font-family: 'Mulish', sans-serif;
  }

  input {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  button {
    width: 10rem;
  }
`;
