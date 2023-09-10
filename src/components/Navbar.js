import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import '../components/Navbar.css'; 
import { Button } from './Button';

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

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <h1 className='logo-name'>Sierra Williams</h1>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faAngleDoubleRight: faAlignJustify}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="https://github.com/sierrawillliams" className='nav-links' onClick={closeMobileMenu}>
                        Github
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="https://www.linkedin.com/in/sierrawillliams/" className='nav-links' onClick={closeMobileMenu}>
                        LinkedIn
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/work" className='nav-links' onClick={closeMobileMenu}>
                        Work
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar