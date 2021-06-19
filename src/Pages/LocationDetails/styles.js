import styled from "styled-components";

export const Title = styled.h2`
    font-size: 2.5em;
`

export const Tag = styled.span`
    font-weight: bolder;
    font-size: 1.25em;

`

export const CharactersContainer = styled.section`
    display: grid;
    place-content: center;
    gap: 2em;
    grid-template-columns: repeat(auto-fill, 150px);

    *:first-child{
        grid-column: 1 / -1;
    }
`