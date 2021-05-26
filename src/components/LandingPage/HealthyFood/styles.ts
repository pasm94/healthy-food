import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1366px;
  min-height: 768px;

  @media (min-width: 1300px) {
    background-image: url('/components/LandingPage/HealthyFood/Illustration.svg');
    background-repeat: no-repeat;
    background-position: right 0;
  }

  @media (max-width: 1300px) {
    min-height: 110vh;
    /* max-height: 700px; */

    background-image: url('/components/LandingPage/HealthyFood/Illustration.svg');
    background-repeat: no-repeat;
    background-position: right 0;
    background-size: 60%;
  }

  @media (max-width: 1080px) {
    min-height: 600px;
    /* max-height: 700px; */

    background-image: url('/components/LandingPage/HealthyFood/Illustration.svg');
    background-repeat: no-repeat;
    background-position: right 0;
    background-size: 60%;
  }
`;

// export const Content = styled.div`
//   width: 100%;
//   display: flex;
// `;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  /* margin-top: 1.5rem; */

  h1 {
    color: #1d164d;
    font-size: 3rem;
    margin-left: 10%;
    margin-top: 14rem;
    line-height: 4rem;
    width: 25rem;
  }

  span#menu {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    margin-left: 10%;
    margin-right: 10%;
    align-items: center;

    h2 {
      color: #badc58;
      font-size: 2rem;
    }

    nav {
      a {
        text-decoration: none;
        color: white;
        font-family: 'Mulish', sans-serif;
        font-weight: bold;
        font-size: 1rem;

        + a {
          margin-left: 2rem;
        }
        cursor: not-allowed;

        :last-child {
          cursor: pointer;
          padding: 1rem;
          color: #badc58;
          background-color: white;
          border-radius: 5px;
        }

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  span#search {
    display: flex;
    margin-left: 10%;

    margin-top: 1.5rem;

    input {
      padding: 1rem;
    }

    button {
      width: 3rem;
      border-radius: 5px;
      margin-left: 1rem;
    }
  }
`;
