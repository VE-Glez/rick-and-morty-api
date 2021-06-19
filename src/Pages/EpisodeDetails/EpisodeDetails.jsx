import React from 'react'
import CharacterFromFetch from '../../containers/CharacterFromFetch/CharacterFromFetch'
import useFetchData from '../../hooks/useFetchData'
import { prettyPrint } from '../../utils/prettyFormat'
import { CharactersContainer } from './styles';


const EpisodeDetails = (props) => {
    const episodeID = props.match.params.id
    const {result} = useFetchData("episode", episodeID)

    if (result.loading) return <h3>Loading episode details</h3>
    const newFormat = prettyPrint(result.data.episode)
    return (
        <section>
            <h2>{result.data.name}</h2>
            <p>Season: {newFormat[0]} - Episode: {newFormat[1]}</p>
            <p><span>On air: </span><span>{result.data.air_date}</span></p>
            <CharactersContainer>
                <h3>Characters on this episode</h3>
                {result.data.characters.map(characterURL => {
                    let characterID = characterURL.split("/").pop();
                    return <CharacterFromFetch key={characterURL} ID={characterID}/>
                })}
            </CharactersContainer>
        </section>
    )
}

export default EpisodeDetails
