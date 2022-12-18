import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;
  list-style: none;
`;

export const LiEl = styled.li`
  padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: 1px solid rgb(191, 180, 180);
  background-color: #444444;
  color: #ededed;
  letter-spacing: 2px;

  img {
    width: 500px;
    height: 400px;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
`;
