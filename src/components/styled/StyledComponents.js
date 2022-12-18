import styled from 'styled-components';

export const Wraper = styled.div`
  height: 100vw;
  width: 100%;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  background-color: #ededed;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Card = styled.div`
  padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: 1px solid rgb(191, 180, 180);
  background-color: #444444;
  color: #ededed;
  h1 {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      color: #da0037;
    }
  }

  input,
  textarea {
    font-size: 16px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    padding: 0.3em 0.8em;
    margin: 0.4em;
    border: 1.5px solid #171717;
    display: block;
    width: 180px;
    color: #da0037;
    resize: vertical;
  }
`;

export const Button = styled.button`
  background-color: #ededed;
  color: #444444;
  font-size: 16px;
  padding: 0.3em 0.8em;
  margin: 26px;
  border: 1.5px solid #171717;
  cursor: pointer;
  &:hover {
    color: #da0037;
    border: 1.5px solid #da0037;
  }
`;

export const ErrorMessage = styled.p`
  color: #da0037;
  margin: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 300;
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
    font-size: 5rem;
  }
`;
