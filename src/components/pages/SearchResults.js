import SongSearch from '../partials/SongSearch'


const SearchResults = (props) => {
<<<<<<< HEAD
    
    { console.log('🙏🏼', props.content)}
    
=======

    { console.log('🙏🏼', props.content) }

>>>>>>> 5f5eb2b350c40211a06c69cca459bedef8e852c3
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
<<<<<<< HEAD
               
                <h1>song</h1>
            </div>
            <div>
                {/* <PlaylistCard songList={songList}/> */}

=======
                {/* <li className="song-card">This is the song card.</li> */}
                {/* <PlaylistCard songList={songList} /> */}
                <SongSearch />
>>>>>>> 5f5eb2b350c40211a06c69cca459bedef8e852c3
            </div>
        </div>
    );
}

export default SearchResults;