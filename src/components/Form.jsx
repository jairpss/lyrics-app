import { useState } from 'react'

const Form = () => {
    const [search, setSearch] = useState({
        artist: '',
        song: ''
    })

  return (
    <form>
        <legend>Search by Artist and Song</legend>

        <div className="form-grid">
            <div>
                <label>Artist</label>
                <input 
                    type="text"
                    name="artist"
                    placeholder="Artist Name"
                    value={search.artist}
                    onChange={e => setSearch({
                        ...search,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>

            <div>
                <label>Song</label>
                <input 
                    type="text"
                    name="song"
                    placeholder="Song Name"
                    value={search.song}
                    onChange={e => setSearch({
                        ...search,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>

            <input type="submit" value="Search"/>
        </div>
    </form>
  )
}

export default Form