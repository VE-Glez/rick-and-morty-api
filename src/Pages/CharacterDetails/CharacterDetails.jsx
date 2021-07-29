import { useState } from 'react';
import Skeleton from './Skeleton';
import useFetchData from '../../hooks/useFetchData';
import EpisodeCardFromFetch from '../../containers/EpisodeCardFromFetch/EpisodeCardFromFetch';
import {
  ListEpisodes,
  Container,
  FavoriteToggleContainer,
  ButtonToggleFavorite,
} from './stylesCharacterDetails';
import { useAPI } from '../../context/APIContext';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';

const CharacterDetails = (props) => {
  window.scrollTo(0, 0);
  const characterID = props.match.params.id;
  const { result } = useFetchData('character', characterID);
  const { favorites, dispatch } = useAPI();

  const [isOpen, setIsOpen] = useState(false);

  const handleAction = () => {
    dispatch({ type: 'TOGGLE_TO_FAVORITES', payload: result.data });
    setIsOpen(false);
  };

  if (result.loading) return <Skeleton />;
  return (
    <>
      <Container>
        <img src={result.data.image} alt={result.data.name}></img>
        <div>
          <h3>{result.data.name}</h3>
          <p>Status: {result.data.status}</p>
          <p>Gender: {result.data.gender}</p>
          <p>Location: {result.data.origin.name}</p>
          <p>
            <FavoriteToggleContainer>
              {favorites.favorites.includes(result.data) ? (
                <>
                  <p>This character is in your favorite list</p>
                  <Button onClick={() => setIsOpen(true)}>remove it</Button>
                </>
              ) : (
                <>
                  <p>This character is not in your favorite list</p>
                  <Button onClick={handleAction}>add it</Button>
                </>
              )}
            </FavoriteToggleContainer>
          </p>
          <ListEpisodes>
            <h4>Episodes:</h4>
            {result.data.episode.map((url) => {
              let id = url.split('/');
              id = id[id.length - 1];
              return <EpisodeCardFromFetch key={id} episodeID={id} />;
            })}
          </ListEpisodes>
        </div>
      </Container>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        handleAction={handleAction}
      />
    </>
  );
};

export default CharacterDetails;
