import { Lista, FavoritesContainer } from "./styles";
const FavoritesSection = ({ children }) => {
  return (
    <FavoritesContainer>
      <h3>Lista de favoritos</h3>
      <Lista>{children}</Lista>
    </FavoritesContainer>
  );
};

export default FavoritesSection;
