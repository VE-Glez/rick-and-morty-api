import Navbar from "../Navbar/Navbar.jsx";
import { HeaderStyled } from "./styles.js";
import { Divide } from "hamburger-react";
import { useEffect, useState } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const desapearMenu = () => setOpen(false);
    let wrapperContent = document.querySelector("header ~ div:first-of-type");
    wrapperContent.addEventListener("click", desapearMenu);
  }, []);

  return (
    <>
      <HeaderStyled>
        <h1>React Hooks</h1>
        <Divide toggled={isOpen} toggle={setOpen} />
        <Navbar isOpen={isOpen} />
      </HeaderStyled>
    </>
  );
};

export default Header;
