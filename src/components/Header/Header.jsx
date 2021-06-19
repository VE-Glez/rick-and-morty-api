import Navbar from "../Navbar/Navbar.jsx";
import { HeaderStyled } from "./styles.js";
import { Divide } from "hamburger-react";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const desapearMenu = (e) => {
      console.log(e.currentTarget)
      setOpen(false)
    };
    const el = document.querySelectorAll('*:not(header, div.hamburger-react, div.hamburger-react *, div#appContainer, #root, body, html, head)')
    el.forEach(el => {
      el.addEventListener("click", desapearMenu)
    })

    return () => { el.forEach(el => {
      el.removeEventListener("click", desapearMenu)
    })}

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
