import Form from './Form'
import Alert from './Alert'
import SongLyric from './SongLyric'
import useLyrics from '../hooks/useLyrics'

const AppLyrics = () => {

    const {alert, lyric} = useLyrics()

  return (
    <>
        <header>Find your favorite songs lyrics</header>
        <Form />
        <main>
            {alert ? 
                <Alert>{alert}</Alert> : 
                lyric ? <SongLyric /> : 
                <p className="text-center color-gray">Search lyrics from your favorites artists</p>
            }
        </main>
    </>
  )
}

export default AppLyrics