import styled from "styled-components";

export const Provider =styled.div`
//background-color:rgb(26, 0, 51);
  padding-top:1.25rem;
  padding-left: 1.125rem;

` 
export const Topbar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

`
export const Yoo = styled.div`
   margin-right: 0.5rem;
  
  &:hover{
    cursor:pointer;
    opacity:0.9;
    transform:scale(0.99)
  }


`

export const TopImg = styled.img`
  height:70px;
  width:70px;
  border-radius:50%;
  object-fit:cover;
`

export const Searchbar = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  height: 20px;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #fff;
  overflow:hidden;
`

export const Bottom = styled.div`
  margin-top:20px;
  display:flex;
  margin-right:5px;
  margin-bottom:40px;
  
`
