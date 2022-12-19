import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wraper = styled.div`
  width: auto;
  min-height: 1000px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  background-color: rgb(26, 194, 221);
  background: linear-gradient(
    165deg,
    rgba(26, 194, 221, 1) 0%,
    rgba(236, 194, 194, 1) 49%,
    rgba(249, 168, 231, 1) 100%
  );
  background-position: center;
  background-size: cover;
`;

export const Card = styled.div`
  padding: 1rem;
  max-width: 630px;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: none;
  background-color: #ededed;
  border-radius: 20px;
  background-color: #4444;
  opacity: 0.95;
  h1 {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 0;
  }
`;

export const Form = styled.form`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  a {
    color: inherit;
    text-underline-offset: 5px;
    font-size: 1.5rem;
    &:hover {
      color: white;
    }
  }
  input,
  textarea {
    font-size: 1.5rem;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    padding: 0.3em 0.8em;
    margin: 1rem;
    border: 1.5px solid white;
    border-radius: 25px;
    padding: 1rem;
    display: block;
    width: 180px;
    color: black;
    resize: vertical;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: #000000;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.3em 0.8em;
  margin: 26px;
  padding: 1rem;
  border: 1.5px solid white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    color: black;
    border: 1.5px solid;
  }
`;

export const ErrorMessage = styled.p`
  color: #da0037;
  margin: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Section = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  width: auto;
  height: 350px;
  h1 {
    font-size: 3.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-underline-offset: 5px;
  font-size: 1.5rem;
  &:hover {
    color: white;
  }
`;
