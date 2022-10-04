import {useState, createContext} from 'react' 
import axios from 'axios'

const LyricsContext = createContext() 

const LyricsProvider = ({children}) => {

    const [alert, setAlert] = useState('')
    const [lyric, setLyric] = useState('')

    const searchLyrics =  (search) => {
        
        try {
            const {artist, song} = search
            const options = {
                method: 'GET',
                url: `https://lyrics-plus.p.rapidapi.com/lyrics/${song}/${artist}`,
                headers: {
                  'X-RapidAPI-Key': '391a7beee1mshc683a41dfeb5339p188994jsn58a0999f6110',
                  'X-RapidAPI-Host': 'lyrics-plus.p.rapidapi.com'
                }
              };
              axios.request(options).then(function (response) {
                setLyric(response.data.lyrics)
                // setAlert('')
                // console.log(response.data.lyrics);
            })
        } catch (error) {
            console.log('Song not found')
            setLyric('')
            console.log(error)
        }   
        
    }

    return (
        <LyricsContext.Provider
            value={{
                alert,
                setAlert,
                searchLyrics,
                lyric
            }}
        >
            {children}
        </LyricsContext.Provider> 
    )
}

export { 
    LyricsProvider 
}

export default  LyricsContext