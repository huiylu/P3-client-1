import SongSearch from '../partials/SongSearch'


const SearchResults = (props) => {

<<<<<<< HEAD
    { console.log('🙏🏼', props.content) }
=======
    { console.log('🙏🏼', props.content.length) }
    let songList



    if (props.content.length > 0) {
        songList = props.content.map((song, i) => (
            <li className="song-card">
                <h4 key={i}>{song.name}</h4>
            </li>
        ))
    } else {
        <h1>Loading</h1>
    }
>>>>>>> 5736fb312102abf0364b42e5bddf441fe11f9b4c

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
<<<<<<< HEAD
                <SongSearch />
=======
                <SongSearch songList={songList} />
>>>>>>> 5736fb312102abf0364b42e5bddf441fe11f9b4c
            </div>
        </div>
    );
}

export default SearchResults;