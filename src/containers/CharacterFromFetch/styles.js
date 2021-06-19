import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Card = styled(Link)`
    width: 150px;
    height: 150px;
    border: 1px solid ${({theme}) => theme.fg};
    display: inline-block;
    position: relative;
    background: url(${({src}) => src}) no-repeat;
    background-size: contain;
    border-radius: 1em;
    overflow: hidden;
`

export const Image = styled.img`
    width: 150px;
    /* border-radius: 50%; */
    display: inline-block;
`
export const Name = styled.p`
    position: absolute;
    bottom: -1em;
    width: 100%;
    /* margin: 0; */
    font-size: 1.2em;
    text-shadow: 0 0 0.25em ${({theme}) => theme.fg};
    background: ${({theme}) => theme.header};
    color: ${({theme}) => theme.fg};
`