import styled from 'styled-components';

export const Article = styled.article`
  width: 310px;
  min-height: 225px;
  padding: 10px;
  display: grid;
  gap: 10px 0;
  box-shadow: 0 0 5px;
  background-color: ${({ theme }) => theme.cardBackground};
  grid:
    'header info' 80%
    'actions actions' 20% / 1fr 1fr;
  justify-items: stretch;

  header {
    grid-area: header;
    position: relative;

    img {
      width: 70px;
      border-radius: 35px;
    }
  }
`;

export const Body = styled.div`
  grid-area: info;
  text-align: center;
  background: ${({ theme }) => theme.fg};
  color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
`;

export const Footer = styled.footer`
  grid-area: actions;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & * {
    flex: 1 1 auto;
  }
`;
