import React from 'react'

import styled from 'styled-components'



const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 3;
background-color: rgba(0,0,0,0.2);
top: 0;
left: 0;
z-index: 3;
opacity: 0;
display: flex;
align-items: center;
justify-content: center;`


const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;
transition: all in 0.5s ease;
cursor: pointer;

&:hover ${Info}{
    opacity:1;
}`

const Circle = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-color: white;
position: absolute;`
const Image = styled.img`
height:75%;
z-index: 2;`
const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
transition: all in 0.5s ease-out;

&:hover{
    background-color: #555;
    transform: scale(1.1);
}`



export const Product = ({item}) => {
  return (
    <Container>
<Circle/>
<Image src={item.img}/>
<Info>
    <Icon>
    <ion-icon name="cart-outline"></ion-icon>
    </Icon>
    <Icon>
    <ion-icon name="search-outline"></ion-icon>
    </Icon>
    <Icon>
    <ion-icon name="heart-outline"></ion-icon>
    </Icon>
</Info>
    </Container>
  )
}
