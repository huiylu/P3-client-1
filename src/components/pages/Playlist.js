import SpotifyPlayer from 'react-spotify-player';


const Playlist = (props) => {

    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
        width: '100%',
        height: 300,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'


    return (
        <div>
            <h3>Playlist</h3>
            {/* <ul className="playlist-list"> */}
                {/* <li className="player-container">
                    <SpotifyPlayer
                        uri="spotify:track:3jjBPF4NDMCU51psU8JPpR" 
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </li> */}
                

            {/* </ul> */}
        </div>
    );
}

export default Playlist