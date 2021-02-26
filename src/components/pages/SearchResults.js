import SongSearch from '../partials/SongSearch'


const SearchResults = (props) => {

    { console.log('🙏🏼', props.content.length) }
    let songList;



    if (props.content.length > 0) {
        songList = props.content.map((song, i) => (
            <li key={i} className="song-card">
                <h4>{song.name}</h4>
                <button>Add to Playlist</button>
            </li>
        ))
    } else {
        <h1>Loading</h1>
    }

    return (
        <div className="container">
            {/* <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1> */}
            <div className="inner-container">
                <h1>THIS IS WHAT WE COULD FIND</h1>
                {/* <li className="song-card">This is the song card.</li> */}
                {/* <PlaylistCard songList={songList} /> */}
                <SongSearch songList={songList} />
            </div>
            {/* <SongSearch songList={songList} /> */}
        </div>
    );
}

export default SearchResults;