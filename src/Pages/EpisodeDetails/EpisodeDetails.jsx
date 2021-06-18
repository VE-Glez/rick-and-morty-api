import React from 'react'
import CharacterFromFetch from '../../containers/CharacterFromFetch/CharacterFromFetch'
import useFetchData from '../../hooks/useFetchData'

const EpisodeDetails = (props) => {
    const episodeID = props.match.params.id
    const {result} = useFetchData("episode", episodeID)

    if (result.loading) return <h3>Loading episode details</h3>

    console.log(result.data)
    return (
        <section>
            <h2>Episode Details</h2>
            <p><span>Episode # </span><span>{result.data.id}</span></p>
            <p><span>Episode</span><span>{result.data.episode}</span></p>
            <p><span>Name: </span><span>{result.data.name}</span></p>
            <p><span>Created: </span><span>{result.data.created}</span></p>
            <p><span>On air: </span><span>{result.data.air_date}</span></p>
            <section>
                <h3>Characters on this episode</h3>
                {result.data.characters.map(characterURL => {
                    let characterID = characterURL.split("/").pop();
                    return <CharacterFromFetch key={characterURL} ID={characterID}/>
                })}
            </section>
        </section>
    )
}

export default EpisodeDetails
