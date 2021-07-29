import { useTheme } from '../../context/ThemeContext';
import Button from '../Button/Button';
import { Article, Body, Footer } from './styles';
import { Link } from 'react-router-dom';

const CharacterCard = ({ click, myFavorites, myCharacter }) => {
  const { theme } = useTheme();
  const { image, name, status, species, gender, id } = myCharacter;
  return (
    <Article theme={theme}>
      <header>
        <picture>
          <img src={image} alt={name} />
        </picture>
        <h3>{name}</h3>
      </header>
      <Body>
        <p className='status'>Status: {status}</p>
        <p>Especie: {species}</p>
        <p>Género: {gender}</p>
      </Body>
      <Footer>
        <Button onClick={() => click(myCharacter)}>
          {myFavorites.includes(myCharacter) ? 'Remove from ' : 'Add to'}{' '}
          favorites
        </Button>
        <Link to={`/characterDetails/${id}`}>
          <Button variant='outlined'>More details</Button>
        </Link>
      </Footer>
    </Article>
  );
};

export default CharacterCard;
