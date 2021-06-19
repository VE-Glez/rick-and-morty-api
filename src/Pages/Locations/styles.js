import styled from 'styled-components'
import { Link } from "react-router-dom";
export const Card = styled(Link)`
    display: inline-block;

    color: ${({theme}) => theme.fg};
    background: ${({theme}) => theme.cardBackground};
    border-radius: 1em;
    width: 300px;
    border: 1px solid ${({theme}) => theme.fg};
`

export const Tag = styled.span`
    font-weight: bold;

`

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    place-content: center;
    gap: 1em;
    margin: 1em 2em;

    *:first-child {
        grid-column: 1 / -1;
    }
`