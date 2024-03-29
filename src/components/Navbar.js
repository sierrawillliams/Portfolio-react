import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import '../components/Navbar.css'; 
import { Button2 } from './Button2';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const location = useLocation(); // once ready it returns the 'window.location' object
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

  return (
    <>
    <nav className='navbar'>
        <div className="navbar-container">
            <h1 className='logo-name'>Sierra Williams</h1>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faAngleDoubleRight: faAlignJustify}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className={"nav-links" + (url === "/" ?" active" : "")} onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/about" className={"nav-links" + (url === "/about" ?" active" : "")} onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="https://github.com/sierrawillliams" className={"nav-links" + (url === "/github" ?" active" : "")} onClick={closeMobileMenu}>
                        Github
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="https://www.linkedin.com/in/sierrawillliams/" className={"nav-links" + (url === "/linkedin" ?" active" : "")} onClick={closeMobileMenu}>
                        LinkedIn
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/work" className={"nav-links" + (url === "/work" ?" active" : "")} onClick={closeMobileMenu}>
                        Work
                    </Link>
                </li>
            </ul>            
        </div>
    </nav>
    </>
  )
}

export default Navbar;