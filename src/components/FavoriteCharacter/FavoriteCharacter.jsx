import { Button, Card } from "./styles";

const MinimalCard = ({ favorite, active, thisArray, index, callback }) => {
  return (
    <Card
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
      <Button to={`/characterDetails/${favorite.id}`}>More Details</Button>
    </Card>
  );
};

export default MinimalCard;
