import styled from 'styled-components';

export const Container = styled.div`
  width: 33rem;
  height: 14rem;
  background-color: white;

  display: flex;
  /* flex-direction: column; */
  align-items: center;
  border-radius: 8px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);

  img {
    height: 100%;
  }

  span {
    width: 53%;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;

    h4 {
      line-height: 2.5rem;
      font-weight: bold;
      font-size: 1.5rem;
      color: #1d164d;
      margin-bottom: 1rem;
    }

    button {
      padding: 1rem;
      border-radius: 5px;
    }

    a {
      text-decoration: none;
      color: white;
      font-weight: normal;
    }
  }
`;
