// import React, { useEffect, useState } from "react";
import React from 'react';

import styled from "styled-components";

import '../index.css'
// style = {{ maxWidth: "200px" }}



const CardParent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CardStyle = styled.div`
border: 1px solid black;
background-color: white;
width: 50%;
margin: 5px;
border-radius: 10px;
`


const CardChild = styled.div`
// background-color: blue;
display: flex;
flex-direction: row;
justify-content: center;
`

const H3 = styled.h3`
font-size: .7rem;
margin: 5%;
`


const StarwarsCard = ({name, eye_color, height, birth_year, mass}) => {
    return (
        <CardParent>
            <CardStyle>
                <h1>{name}</h1>
                <CardChild>
                    <H3>Height: {height}</H3>
                    <H3>Mass: {mass}</H3>
                    <H3>Eye Color: {eye_color}</H3>
                    <H3>Birth Year: {birth_year}</H3>
                </CardChild>
            </CardStyle>
        </CardParent>
   
    )
}

export default StarwarsCard;
