import styled from "styled-components";

export const Grid = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-items: center;
gap:1rem;
list-style: none;
`

export const LiEl = styled.li`
padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: 1px solid rgb(191, 180, 180);
  background-color: #444444;
  color: #ededed;
`

export const ShopName = styled.h2`
font-size: 3rem;
`