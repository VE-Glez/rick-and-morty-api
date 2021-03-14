import Navbar from "../Navbar/Navbar.jsx";
import { HeaderStyled } from "./styles.js";
import { Divide } from "hamburger-react";
import { useState } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const isFixed = false;
  return (
    <>
      <HeaderStyled fixed={isFixed}>
        <h1>React Hooks</h1>
        <Divide toggled={isOpen} toggle={setOpen} />
        <Navbar isOpen={isOpen} />
      </HeaderStyled>
    </>
  );
};

export default Header;
