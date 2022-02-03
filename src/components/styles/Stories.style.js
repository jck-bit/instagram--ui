import styled from "styled-components";

export const Color = styled.div`
  padding-left:15px;
  display:grid;
  grid-gap:20px;
  grid-template-columns:repeat(3, 14.5rem);
`


export const Brown = styled.img`
  border-radius:5%;
  height:210px;
  width:220px;
  object-fit:cover;


  &:hover{
    cursor:pointer;
    opacity:0.9;
    transform:scale(0.99)
  }

`