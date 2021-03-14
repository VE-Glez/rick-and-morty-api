import { Label, Nav, NavItem } from "./styles";
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import Search from "../Search/Search";
const Navbar = ({ isOpen }) => {
  const { themeDispatch, themes } = useTheme();
  const handleTheme = (e) => {
    e.target.value && themeDispatch({ type: e.target.value });
  };

  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 160;
      newShowFixed !== showFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);
  }, [showFixed]);

  return (
    <Nav toggled={isOpen}>
      <Label htmlFor="themePicker">
        <p>Theme picker</p>
        <select onChange={handleTheme} id="themePicker">
          <option value={themes.LIGHT}>Light Mode</option>
          <option value={themes.DARK}>Dark Mode</option>
          <option value="">More themes, soon...</option>
        </select>
      </Label>
      <Search placeHolder="Search in this page" />

      {/* el search hace a dos referencias  */}
      <NavItem to="/">Characters</NavItem>
      <NavItem to="/locations">Locations</NavItem>
      <NavItem to="/episodes">Episodes</NavItem>
    </Nav>
  );
};

export default Navbar;
