import { Link } from 'react-router-dom';

const NavBar = ({darkmode, changeMode}) => {

  return (
    <div>
        <nav className={darkmode ? 'navbar nav-navy' : 'navbar bg-white'}>
            <Link className={darkmode ? "text-white mx-4 navbar-brand" : "text-dark mx-4 navbar-brand"} to="/">Where in the world?</Link>
            <button className={darkmode ? 'btn text-white' : 'btn text-dark'} onClick={changeMode} >
                {darkmode ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    </div>
  )
}

export default NavBar;