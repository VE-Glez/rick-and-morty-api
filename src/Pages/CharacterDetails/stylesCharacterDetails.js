import styled from 'styled-components';

export const ListEpisodes = styled.section`
  width: max(300px, 75%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const Container = styled.div`
  margin: 1em;
`;

export const FavoriteToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  width: 200px;
  margin: 0 auto;
`;

export const ButtonToggleFavorite = styled.button`
  border: 1px solid ${({ theme }) => theme.CTA};
  padding: 0.75em;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 2em;
`;
