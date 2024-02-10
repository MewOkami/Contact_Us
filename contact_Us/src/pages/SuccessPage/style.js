import styled from "styled-components";

export const StyledSucessPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--grey-0);

  height: 100vh;

  .SuccessPage__divContainer {
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 15px;

    border-radius: 10px;

    gap: 23px;
  }

  .SuccessPage__divContainer--buttonBack {
    background-color: var(--grey-4);
    color: white;

    padding: 8px 25px;

    text-decoration: none;

    border: none;
    border-radius: 8px;
  }
`;
