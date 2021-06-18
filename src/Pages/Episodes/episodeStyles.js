import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 350px));
    place-content: center;
    gap: 10px;
    
    *:first-child {
        grid-column: 1 / -1;
    }
`