import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Header = (props) => {
    const [redirect, setRedirect] = useState(false);

    const handleSearch = e => {
        e.preventDefault();
        // axios.get
        setRedirect(true)
    }

    if (redirect) return <Redirect to='/searchresults' />

    let style = {
        backgroundColor: 'gray',
        borderBottom: ' 3px solid black',
        color: 'red',
        margin: 0,
        padding: '1em 0'
    }

    // let handleSearch = 


    let conditionalLinks = props.currentUser ?
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/profile'>Playlists</Link>{' | '}
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="search for music" />
                <button type="submit">Search</button>
            </form>
            {/* TODO Add Search for Music */}
            <span className="nav-link" onClick={e => props.handleAuth(null)}> Logout</span>
        </nav> :
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/auth'>Login or Signup to Search for Music!</Link>
        </nav>

    return (
        <header style={style}>
            <h2> Its a website!</h2>
            {conditionalLinks}
        </header>
    );
}

export default Header