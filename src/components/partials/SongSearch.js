import axios from 'axios';
import { useState } from 'react';

const SongSearch = (props) => {
    const [title, setTitle] = useState('');
    const [song, setSong] = useState('')

    // const updatePlaylist = (e) => {
    //     e.preventDefault();
    //     axios.put(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`, { data: {title, song} })
    //         .then(response => {
    //             console.log(response.data)
    //         }).catch(err => { console.log(`ERROR UPDATING PLAYLIST`, err) })
    // };
    // onClick={updatePlaylist()}
    return (
            <li>{props.songList}<button >Add To Playlist</button></li>
    );
}
export default SongSearch;