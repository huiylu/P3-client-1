import { Link } from 'react-router-dom'
const Header = (props) => {
    let style = {
        backgroundColor: 'chartreuse',
        borderBottom: ' 3px solid black',
        margin: 0,
        padding: '1em 0'
    }
    let conditionalLinks = props.currentUser ?
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/profile'>Account</Link>{' | '}
            <span onClick={e => props.handleAuth(null)}> Logout</span>
        </nav>:
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/auth'>Login or Signup</Link>{' | '}
        </nav>
        
    return (
        <header style={style}>
            <h2> Its a website!</h2>
                {conditionalLinks}
        </header>
    );
}

export default Header