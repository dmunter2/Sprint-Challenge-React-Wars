// import React, { useEffect, useState } from "react";
import React from 'react';

import styled from "styled-components";

import '../index.css'
// style = {{ maxWidth: "200px" }}

const CardStyle = styled.div`
background-color: blue;
`


const StarwarsCard = ({name}) => {
    return (
        <CardStyle>
            <h1>{name}</h1>
        </CardStyle>
    )
}

export default StarwarsCard;
