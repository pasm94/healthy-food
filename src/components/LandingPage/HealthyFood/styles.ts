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
  }

  @media (max-width: 850px) {
    min-height: 450px;
    background-image: none;
  }

  @media (max-width: 480px) {
    min-height: 400px;
    background-image: none;
  }

  @media (max-width: 360px) {
    min-height: 350px;
    background-image: none;
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

    @media (max-width: 850px) {
      margin-top: 5rem;
    }
  }

  span#menu {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    margin-left: 10%;
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

        @media (max-width: 850px) {
          display: none;
        }

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
          margin-right: 9rem;

          @media (max-width: 1080px) {
            margin-right: 4rem;
          }

          @media (max-width: 850px) {
            color: white;
            background-color: #badc58;
          }
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

export const Bars = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: flex;
    margin-right: 10%;
    font-size: 3rem;

    z-index: 200;
  }

  @media (max-width: 440px) {
    display: flex;
    margin-right: 8px;
  }
`;

export const NavMobile = styled.nav`
  background-color: rgba(1, 1, 1, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;

  top: 0;
  left: 0;

  a {
    font-size: 2.5rem;
    text-decoration: line-through;
    color: white;
    font-family: 'Mulish', sans-serif;
    font-weight: bold;
    margin-top: 2rem;
  }

  a#register {
    text-decoration: none;
    background-color: #badc58;
    border-radius: 5px;
    padding: 1rem;
  }
`;
