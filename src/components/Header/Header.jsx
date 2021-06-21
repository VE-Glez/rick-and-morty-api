import Navbar from '../Navbar/Navbar.jsx';
import { HeaderStyled } from './styles.js';
import { Divide } from 'hamburger-react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const desapearMenu = () => {
      setOpen(false);
    };
    const el = document.querySelector('#contentWrapper');
    el.addEventListener('click', desapearMenu);

    return () => {
      el.removeEventListener('click', desapearMenu);
    };
  }, []);

  return (
    <>
      <HeaderStyled ref={headerRef}>
        <Link to='/'>
          <h1>React Hooks</h1>
        </Link>
        <Divide toggled={isOpen} toggle={setOpen} />
        <Navbar isOpen={isOpen} toClose={setOpen} />
      </HeaderStyled>
    </>
  );
};

export default Header;
