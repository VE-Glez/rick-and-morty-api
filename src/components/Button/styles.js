import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  margin: 0 auto;
  padding: 4px;
  width: 75%;
  height: auto;
  color: ${({ theme }) => theme.bg} !important;
  text-decoration: none;
  transition: 0.5s ease-in;
  background-color: ${({ theme }) => theme.CTA};
  border-radius: 5px;
`;
