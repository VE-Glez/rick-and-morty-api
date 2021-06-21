import { useAPI } from '../../context/APIContext';
import Modal from '../Modal/Modal';
import { Button, Card, Title, Remove } from './styles';
import { useState } from 'react';

const MinimalCard = ({ favorite, active, thisArray, index, callback }) => {
  const { dispatch } = useAPI();
  const [isOpen, setIsOpen] = useState(false);

  const handleAction = () => {
    dispatch({ type: 'TOGGLE_TO_FAVORITES', payload: favorite });
  };

  return (
    <>
      <Card
        className={
          favorite.id === active.id
            ? 'isActive'
            : thisArray.indexOf(active) < index
            ? 'isRight'
            : 'isLeft'
        }
        onClick={() => callback(favorite)}
      >
        <Remove onClick={() => setIsOpen(true)}>X</Remove>
        <img src={favorite.image} alt={favorite.name} />
        <Title>{favorite.name}</Title>
        <Button to={`/characterDetails/${favorite.id}`}>More Details</Button>
      </Card>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        handleAction={handleAction}
      />
    </>
  );
};

export default MinimalCard;
