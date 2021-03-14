import { Card } from "./styles";

const MinimalCard = ({ favorite, active, thisArray, index, callback }) => {
  return (
    <Card
      key={favorite.id}
      className={
        favorite.id === active.id
          ? "isActive"
          : thisArray.indexOf(active) < index
          ? "isRight"
          : "isLeft"
      }
      onClick={() => callback(favorite)}
    >
      <img src={favorite.image} alt={favorite.name} />
      <h4>{favorite.name}</h4>
      <p>Favorite ID: {favorite.id}</p>
    </Card>
  );
};

export default MinimalCard;
