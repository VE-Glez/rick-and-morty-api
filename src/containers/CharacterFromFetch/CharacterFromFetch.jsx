import React from 'react'
import useFetchData from '../../hooks/useFetchData'
import { Card, Image, Name } from './styles'

const CharacterFromFetch = ({ID}) => {
    const {result} = useFetchData("character", ID)
    if (result.loading) return <div>Loading character image</div>
    return (
        <Card src={result.data.image} to={`/characterDetails/${ID}`}>
            {/* <Image src={result.data.image} alt={`image of ${result.data.name}`}  /> */}
            <Name>{result.data.name}</Name>
        </Card>
    )
}

export default CharacterFromFetch
