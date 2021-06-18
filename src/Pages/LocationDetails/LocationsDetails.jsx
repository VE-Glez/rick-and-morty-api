import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import CharacterFromFetch from "../../containers/CharacterFromFetch/CharacterFromFetch"
import { Title, Tag, CharactersContainer } from './styles'

const LocationsDetails = (props) => {
    const locationID = props.match.params.id
    const {result} = useFetchData("location", locationID)

    if (result.loading) return <div>Loading location details</div>
    
    return (
        <section>
            <Title>{result.data.name}</Title>
            <p><Tag>Type:</Tag> {result.data.type}</p>
            <p><Tag>Dimension:</Tag> {result.data.dimension}</p>
            <CharactersContainer>
                <h3>Characters seen on this dimension</h3>
            {result.data.residents.map(characterURL =>{
                let characterID = characterURL.split("/").pop()
                return <CharacterFromFetch key={characterURL} ID={characterID}/>
            })}
            </CharactersContainer>
        </section>
    )
}

export default LocationsDetails
