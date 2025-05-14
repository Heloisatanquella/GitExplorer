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
  padding: 0rem 0rem 2rem;

  img {
    width: 9.375rem;
    border-radius: 20%;
  }

  h1 {
    font-size: 1.875rem;
    color: #5d1e3c;
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

export const IssuesList = styled.ul`
  padding-top: 2rem;
  border-top: 0.063rem solid #eee;
  list-style: none;

  & + li {
    padding-top: 0.75rem;
  }

  li {
    display: flex;
    padding: 0.938rem 0.625rem;

    img {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      border: 0.125rem solid #5d1e3c;
    }

    div {
      flex: 1;
      padding-left: 0.75rem;

      p {
        padding-top: 0.625rem;
        font-size: 0.75rem;
        color: #000;
      }
    }

    strong {
      font-size: 0.938rem;

      a {
        text-decoration: none;
        color: #222;
        transform: 0.3s;

        &:hover {
          color: rgb(210, 20, 112);
        }
      }

      span {
        background: #222;
        color: #fff;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.313rem 0.438rem;
        margin-left: 0.625rem;
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    outline: 0;
    border: 0;
    background: #434343;
    color: #fff;
    padding: 0.313rem 0.625rem;
    border-radius: 0.25rem;

    &:hover {
      background:rgb(189, 57, 121);
      color: #FFF;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const FilterList = styled.div`
  display: flex;
  justify-content: center;
  padding: 0rem 0.5rem 2rem;

  button {
    outline: 0;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin: 0 0.188rem;

     &:hover {
      background:rgb(189, 57, 121);
      color: #FFF;
      transition: 0.3s;
    }

    &:nth-child(${props => props.active + 1}){
      background:#5d1e3c;
      color: #FFF;
    }
  }
`;
