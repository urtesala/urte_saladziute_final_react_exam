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
    width: 300px;
    height: 200px;
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
  margin-top: 3rem;
  width: auto;
  height: auto;
  h1 {
    font-size: 5rem;
  }
  background-image: url(https://img.freepik.com/free-vector/simple-rainbow-gradient-vector-template_1159-31539.jpg?w=900&t=st=1671440391~exp=1671440991~hmac=143cdd9cb80a717a0481f3b6724627074faabe99f53ff7a4edf4b9c945c43c64);
  background-position:center ;
  background-size:cover
`