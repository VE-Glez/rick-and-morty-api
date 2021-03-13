import { useTheme } from "../../context/ThemeContext";
import Search from "../Search/Search";
import { HeaderStyled, Label, Nav, NavItem } from "./styles.js";
import { Divide } from "hamburger-react";
import { useEffect, useState } from "react";

const Header = () => {
  const { themeDispatch, themes } = useTheme();
  console.log("HEADER innerWidth", window.innerWidth);
  const handleTheme = (e) => {
    e.target.value && themeDispatch({ type: e.target.value });
  };
  const [isOpen, setOpen] = useState(false);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 160;
      newShowFixed !== showFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);
  }, [showFixed]);

  const myHeader = (isFixed) => (
    <HeaderStyled fixed={isFixed}>
      <h1>React Hooks</h1>

      <Divide toggled={isOpen} toggle={setOpen} />
      <Nav toggled={isOpen}>
        <Label htmlFor="themePicker">
          Theme picker{" "}
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
    </HeaderStyled>
  );

  return (
    <>
      {myHeader()}
      {showFixed && myHeader(true)}
    </>
  );
};

export default Header;
