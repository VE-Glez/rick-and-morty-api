import { useTheme } from "../../context/ThemeContext";
import Search from "../Search/Search";
const Header = () => {
  const { themeDispatch, themes } = useTheme();

  const handleTheme = (e) => {
    e.target.value && themeDispatch({ type: e.target.value });
  };
  return (
    <header>
      <h1>React Hooks</h1>
      <label htmlFor="themePicker">Theme picker</label>
      <select onChange={handleTheme} id="themePicker">
        <option value={themes.LIGHT}>Light Mode</option>
        <option value={themes.DARK}>Dark Mode</option>
        <option value="">More themes, soon...</option>
      </select>

      <Search />
    </header>
  );
};

export default Header;
