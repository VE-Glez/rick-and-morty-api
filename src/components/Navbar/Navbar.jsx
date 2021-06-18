import { Nav, NavItem } from "./styles";
import { useState, useEffect } from "react";
import Search from "../Search/Search";
import ThemePicker from "../ThemePicker/ThemePicker";


const Navbar = ({ isOpen }) => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 160;
      newShowFixed !== showFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
  }, [showFixed]);

  return (
    <Nav toggled={isOpen}>
      <ThemePicker />
      <Search placeHolder="Search in this page" />
      {/* el search hace a dos referencias  */}
      <NavItem to="/">Characters</NavItem>
      <NavItem to="/locations">Locations</NavItem>
      <NavItem to="/episodes">Episodes</NavItem>
    </Nav>
  );
};

export default Navbar;
