import useLyrics from "../hooks/useLyrics"

const SongLyric = () => {
    const { lyric } = useLyrics()
    
  return (
    
       
        <div className="letra">{lyric}</div>
   
    
  )
}

export default SongLyric