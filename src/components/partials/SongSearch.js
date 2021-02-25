import axios from 'axios';
import { useState } from 'react';

const SongSearch = (props) => {
<<<<<<< HEAD
    const [title, setTitle] = useState('');
    const [song, setSong] = useState('')

    // const updatePlaylist = (e) => {
    //     e.preventDefault();
    //     axios.put(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`, { data: {title, song} })
=======

    const [title, setTitle] = useState('');
    const [song, setSong] = useState('');


    // const updatePlaylist = (e) => {
    //     e.preventDefault();
    //     axios.put(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`, {title, song} )
>>>>>>> 5736fb312102abf0364b42e5bddf441fe11f9b4c
    //         .then(response => {
    //             console.log(response.data)
    //         }).catch(err => { console.log(`ERROR UPDATING PLAYLIST`, err) })
    // };
<<<<<<< HEAD
    // onClick={updatePlaylist()}
=======


>>>>>>> 5736fb312102abf0364b42e5bddf441fe11f9b4c
    return (
            <li>{props.songList}<button >Add To Playlist</button></li>
    );
}
export default SongSearch;