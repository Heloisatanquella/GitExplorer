import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 3.5rem;
`;

export const BoxInput = styled.div`
  width: 100%;
  max-width: 43.75rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.2);
  padding: 1.875rem;

  h1 {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 0.625rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 1.875rem;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 0.063rem solid ${props => (props.error ?'rgb(239, 19, 19)' : '#ddd')};
    padding: 0.625rem 0.938rem;
    border-radius: 0.25rem;
    font-size: 1.063rem;
  }
`;

const animateButton = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.isLoading,
}))`
  background: #852a54;
  border: 0;
  border-radius: 0.25rem;
  margin-left: 0.625rem;
  padding: 0 0.938rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.isLoading
      ? css`
          svg {
            animation: ${animateButton} 2s linear infinite;
          }
        `
      : null}
`;

export const ReposList = styled.ul`
  list-style: none;
  padding: 1rem 0.2rem;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.938rem 0;

    & + li {
      border-top: 0.063rem solid #eee;
    }

    a {
      color: #852a54;
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type:'button'
})`
  margin-left: 0.375rem;
  background: transparent;
  color: #852a54;
  border: 0;
  padding: 0.5rem 0.438rem;
  outline: 0;
  border-radius: 0.25rem
`;
