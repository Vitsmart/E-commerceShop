import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'
import { mobile } from '../responsive'
import Navbar from './Navbar'

const Container = styled.div``
const Wrapper = styled.div`
display: flex;
padding: 50px;
${mobile({ padding: "10px", flexDirection:"column"})}`

const ImgContainer = styled.div`
flex: 1;
${mobile({ padding: "10px"})}`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh",})}`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px"})}`

const Title = styled.h1`
font-weight: 300;
`
const Desc = styled.p`
margin: 20px 0px;`
const Price = styled.span`
font-size: 40px;
font-weight: 200px;`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content:space-between;
${mobile({ width: "100%"})}`

const Filter = styled.div`
display: flex;
align-items: center;`
const FilterTitle = styled.span`
font-size: 20px;
font-weight; 200;`
const FilterColor = styled.div`
width: 20px;
height: 20px;

background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
${mobile({ width: "100%"})}
`
const AmountContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 5px;`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
 &:hover {
    background-color: #555;
 }`


export const Products = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://blissstitches.com/wp-content/uploads/2020/11/IMG_20201015_215637-600x789.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Turkish Shirt</Title>
                <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Doloribus fugit minus accusamus nostrum unde quas 
                    dolores eius dolore! Suscipit recusandae debitis, repudiandae in ducimus 
                    sequi vel. Quas voluptate iure recusandae.</Desc>
                <Price>$25</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="blue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <span>-</span>
                        <Amount>1</Amount>
                        <span>+</span>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
