import React from 'react'

//import {FaYoutube} from 'react-icons/fa'
//import { FaBeer } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
height: 70px;
background-color: green;`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;`

const Left = styled.div`
flex:1;
display: flex`
const Language = styled.div`
font-size: 14px;
cursor: pointer`
const SearchContainer = styled.div`
border: 0.5px solid lightgray
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;`

const Input = styled.input`
border: none;`

const Center = styled.div`
flex:1;
text-align: center;`
const Logo = styled.h1`
font-weight: bold;`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`


const MenuItem = styled.div`
font-size: 18px;
cursor: pointer;
margin-Right: 20px;
position: relative;`


// const Badge = styled.div`
// height: 15px;
// width: 15px;
// background-color: red;
// border-radius: 50%;
// position: absolute;
// transition: transform(25px, 25px)`

export default function Navbar() {

  return (
    <Container>
        <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
          <ion-icon name="search-outline"></ion-icon>
          <Input/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Atlantis-OnlineShopping</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem><ion-icon name="cart-outline"></ion-icon></MenuItem>
          
          
        </Right>
          </Wrapper>
    </Container>
  )
}
