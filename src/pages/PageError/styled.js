import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  text-align: center;


  > h2 {
    margin-bottom: 16px;
  }

  > button {
    width: fit-content;

    padding: 8px 16px;

    margin: 0 auto;

    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 8px;

    &:hover {
      background-color: #fff;
      color: #000;
    }

    &:active {
      background-color: #000;
      color: #fff;
    }

  }

`;
