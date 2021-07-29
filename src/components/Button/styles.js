import styled, { css } from 'styled-components';

const variants = {
  outlined: css`
    color: ${({ theme }) => theme.fg};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.CTA};
  `,
  primary: css`
    color: ${({ theme }) => theme.bg};
    background-color: ${({ theme }) => theme.CTA};
    border: none;
  `,
};

export const StyledButton = styled.button`
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 4px;
  height: auto;
  min-width: 150px;
  text-decoration: none;
  transition: 0.5s ease-in;
  border-radius: 5px;
  box-shadow: 0 1px 1px 0 black;
  outline: none;
  ${({ variant }) =>
    variant === undefined ? variants['primary'] : variants[variant]}
`;
