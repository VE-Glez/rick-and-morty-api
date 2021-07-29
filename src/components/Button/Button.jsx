import React from 'react';
import { StyledButton } from './styles';
// import { Link } from 'react-router-dom';

const Button = ({ children, variant, onClick }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
