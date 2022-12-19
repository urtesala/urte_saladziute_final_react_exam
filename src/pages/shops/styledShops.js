import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 1rem;
  list-style: none;
  @media screen and (max-width: 760px){

  }
`;

export const LiEl = styled.li`
  padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: none;
  color: #000000;
  letter-spacing: 2px;
  width: 20rem;
  background-color: #ededed;
  border-radius: 20px;
  background-color: #4444;
  opacity: 0.95;
  h1 {
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-bottom: 0;
  }
  &:hover {
    opacity: 1;
  }

  img {
    width: 300px;
    height: 200px;
    border-radius: 25px;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const StyledShop = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  width: auto;
  height: auto;
  h1 {
    font-size: 5rem;
  }
  background-color: rgb(26, 194, 221);
  background: linear-gradient(
    165deg,
    rgba(26, 194, 221, 1) 0%,
    rgba(236, 194, 194, 1) 49%,
    rgba(249, 168, 231, 1) 100%
  );
  background-size: cover;
`;
