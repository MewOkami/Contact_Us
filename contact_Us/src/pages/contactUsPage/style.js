import styled from "styled-components";

export const StyledMainContacts = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--grey-0);

  height: 100vh;

  .StyledMainContacts__divContainer {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;

    border-radius: 10px;
    border: solid 2px var(--grey-0);

    gap: 50px;
  }

  .StyledMainContacts__h2Title {
    margin-top: 40px;
  }

  .StyledMainContacts__divContainer--Form {
    display: flex;
    flex-direction: column;

    gap: 20px;

    width: 30vw;
    height: 70vh;
    padding: 5px;
  }

  .StyledMainContacts__divContainer--FormInput {
    height: 30px;

    border: none;
    border: solid 1px var(--grey-1);
    border-radius: 10px;
  }

  .StyledMainContacts__divContainer--FormTextArea {
    height: 150px;

    resize: none;

    border: none;
    border: solid 1px var(--grey-1);
    border-radius: 10px;
  }

  .StyledMainContacts__divContainer--FormButtonSubmit {
    background-color: var(--grey-4);
    color: white;

    height: 30px;

    border: none;
    border-radius: 5px;
  }

  .StyledMainContacts__divContainer--FormButtonSubmit:hover {
    background-color: var(--grey-1);
    /* color: var(--grey-4); */

    transition: 0.5s;
  }
`;
