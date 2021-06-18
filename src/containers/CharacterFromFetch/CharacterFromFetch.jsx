import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { Container, Image } from './styles'

const CharacterFromFetch = ({ID}) => {
    const {result} = useFetchData("character", ID)
    if (result.loading) return <div>Loading character image</div>
    return (
        <Container to={`/characterDetails/${ID}`}>
            <Image src={result.data.image} alt={`image of ${result.data.name}`}  />
            <p>{result.data.name}</p>
        </Container>
    )
}

export default CharacterFromFetch
