import styled from 'styled-components'

export const CharactersContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    place-content: center;
    gap: 2em;
    margin: 0 5em;
    *:first-child {
        grid-column: 1 / -1;
    }
`