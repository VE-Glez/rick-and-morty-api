import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled(Link)`
    width: min(90%, 475px);
    border: 1px solid crimson;
    display: inline-block;
`

export const Image = styled.img`
    width: 150px;
    border-radius: 50%;
    display: inline-block;
`
