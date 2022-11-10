import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'
import { Products } from '../components/Products'

export const ProductList = () => {

const Container = styled.div`
`
const Title = styled.h1`
margin: 20px;`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
margin: 20px;
font-weight: 600;
margin-right: 20px;`
const Select = styled.select`
padding: 10px;
margin-right: 20px;`
const Option = styled.option`
`
  return (
    <Container>
<Navbar/>
<Announcement/>
<Title>Wears</Title>
<FilterContainer>
    <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Red</Option>
        </Select>
        <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            
        </Select>
    </Filter>
    <Filter>
        <FilterText>Sort products:</FilterText>
        <Select>
          
            <Option>Selected Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
        </Select>
    </Filter>
</FilterContainer>
<Products/>
<Newsletter/>
<Footer/>
    </Container>
  )
}