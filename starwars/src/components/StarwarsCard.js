import React, { useEffect, useState } from "react";

import styled from "styled-components";

import '../index.css'
// style = {{ maxWidth: "200px" }}

const H1 = styled.h1`
color: blue;
`


export default function StarwarsCard(props) {

    return (
        <div>
            <H1>{props.characterName}</H1>
        </div>
    );
}