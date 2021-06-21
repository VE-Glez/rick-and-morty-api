import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import { Card, Details, Button, Title } from './styles';

const CharacterFromFetch = ({ ID }) => {
  const { result } = useFetchData('character', ID);
  if (result.loading) return <div>Loading character image</div>;
  return (
    <Card src={result.data.image}>
      <Details>
        <Title>{result.data.name}</Title>
        <Button to={`/characterDetails/${ID}`}>View details</Button>
      </Details>
    </Card>
  );
};

export default CharacterFromFetch;
