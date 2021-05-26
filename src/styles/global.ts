import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* :root {
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969db3;

    --background: #f0f2f5;
    --shape: #ffffff;
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* font-size = 16px in desktop */
    /* REM => 1rem = font-size */
    /* use % to vary if the user has specific settings for mobile */

    @media (max-width: 1080px) {
      font-size: 93.75%;
      /* font-size = 15px */
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
      /* font-size = 14px */
    }

    @media (max-width: 480px) {
      font-size: 81.25%;
      /* font-size = 13px */
    }

    @media (max-width: 360px) {
      font-size: 75%;
      /* font-size = 12px */
    }
  }
  
  body {
    background-color: #fafafc;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    /* font-family: 'Poppins', sans-serif; */
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
