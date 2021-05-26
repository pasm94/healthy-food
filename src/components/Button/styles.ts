import styled from 'styled-components';

export const Container = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #badc58;
    height: 3rem;
    border: 0;
    color: white;
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
