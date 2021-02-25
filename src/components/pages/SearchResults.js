import SongSearch from '../partials/SongSearch'


const SearchResults = (props) => {

    { console.log('🙏🏼', props.content) }

    // let songList = props.content.data.song.map((song, i) => (
    //     <li className="song-list-result">
    //         <h1 key={i}>{song.name}</h1>
    //     </li>
    // ))
    return (
        <div className="container">
            {/* <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1> */}
            <div className="inner-container">
                <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1>
                {/* <li className="song-card">This is the song card.</li> */}
                {/* <PlaylistCard songList={songList} /> */}
                <SongSearch />
            </div>
        </div>
    );
}

export default SearchResults;