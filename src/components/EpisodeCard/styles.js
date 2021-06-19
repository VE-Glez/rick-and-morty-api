import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
    background-color: ${({theme}) => theme.cardBackground};
    box-shadow: 0px 0px 4px ${({theme}) => theme.fg};
    border-radius: 10px;
    width: 100%;
    color: inherit;
    text-decoration: none;
    &:hover {
        animation: zooming 2s ease-in-out infinite;
    }

    @keyframes zooming {
        0%, 100% {
            transform: scale(1)
        }
        50% {
            transform: scale(1.05)
        }
    }
`

export const Tag = styled.span`

    font-weight: bold;
    /* text-transform: uppercase; */
    text-decoration: double;
    text-shadow: 0 0 0.4em ${({theme}) => theme.fg};
                /* 0 0 0.25em #000; */
`