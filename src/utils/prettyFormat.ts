export const prettyPrint = (episode:string) => {
    const newFormat = [    episode.substring(1,3), episode.substring(4,6)]
    return newFormat
    // return `Season: ${newFormat[0]}. Episode: ${newFormat[1]}`
}