import { Link } from 'react-router-dom'
const Header = (props) => {
    let style = {
        backgroundColor: 'gray',
        borderBottom: ' 3px solid black',
        color: 'red',
        margin: 0,
        padding: '1em 0'
    }
    let conditionalLinks = props.currentUser ?
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/profile'>Account</Link>{' | '}
            {/* TODO Add Search for Music */}
            <span onClick={e => props.handleAuth(null)}> Logout</span>
        </nav>:
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/auth'>Login or Signup to Search for Music!</Link>{' | '}
        </nav>
        
    return (
        <header style={style}>
            <h2> Its a website!</h2>
                {conditionalLinks}
        </header>
    );
}

export default Header