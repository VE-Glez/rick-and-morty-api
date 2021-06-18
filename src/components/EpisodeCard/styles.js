import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
    background-color: ${({theme}) => theme.cardBackground};
    box-shadow: 0px 0px 4px ${({theme}) => theme.fg};
    border-radius: 10px;
    width: 100%;

    &:hover {
        animation: zooming 2s ease-in-out infinite;
    }

    @keyframes zooming {
        0% {
            transform: scale(1)
        }
        50% {
            transform: scale(1.05)
        }
        100% {
            transform: scale(1)
        }
    }
`