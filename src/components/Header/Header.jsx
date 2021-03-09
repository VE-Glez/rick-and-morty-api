import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { themeDispatch, themes } = useTheme();

  const handleTheme = (e) => {
    themeDispatch({ type: e.target.value });
  };
  return (
    <header>
      <h1>React Hooks</h1>
      <label htmlFor="themePicker">Theme picker</label>
      <select onChange={handleTheme} id="themePicker">
        <option value={themes.DARK}>Dark Mode</option>
        <option value={themes.LIGHT}>Light Mode</option>
      </select>
    </header>
  );
};

export default Header;
