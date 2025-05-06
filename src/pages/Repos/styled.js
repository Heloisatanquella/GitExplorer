import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 43.75rem;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin: 5rem auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 9.375rem;
    border-radius: 20%;
  }

  h1 {
    font-size: 1.875rem;
    color: rgb(93, 30, 60);
  }

  p {
    font-size: 0.875rem;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 25rem;
  }
`;

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;
`;
