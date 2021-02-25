import SongSearch from '../partials/SongSearch'


const SearchResults = (props) => {
    
    { console.log('🙏🏼', props.content)}
    
    
    
    if (props.content.data.song.length >0) {
        
            let songList = props.content.data.song.map((song, i) => (
                <li className="song-list-result">
                    <h1 key={i}>{song.name}</h1>
                </li>
            ))
        
        } else {

        }


    return (
        
        <div className="container">
            {/* <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1> */}
            <div className="inner-container">
                <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1>
                {/* <li className="song-card">This is the song card.</li> */}
                {/* <PlaylistCard songList={songList} /> */}
            </div>
            
                <SongSearch songList={songList} />

            
        </div>
    );
}

export default SearchResults;