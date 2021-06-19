import Navbar from "../Navbar/Navbar.jsx";
import { HeaderStyled } from "./styles.js";
import { Divide } from "hamburger-react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const desapearMenu = () => setOpen(false);
    const el = document.querySelectorAll('div')
    // el[0].addEventListener("click", desapearMenu);

  }, []);

  return (
    <>
      <HeaderStyled>
        <Link to='/'><h1>React Hooks</h1></Link>
        <Divide toggled={isOpen} toggle={setOpen} />
        <Navbar isOpen={isOpen} />
      </HeaderStyled>
    </>
  );
};

export default Header;
