import React from 'react'
import {Label} from "./styles"
import { useTheme } from "../../context/ThemeContext";

const ThemePicker = () => {
    const { themeDispatch, themes } = useTheme();
    const handleTheme = (e) => {
      e.target.value && themeDispatch({ type: e.target.value });
    };
    return (
        <Label htmlFor="themePicker">
            <p>Theme picker</p>
            <select onChange={handleTheme} id="themePicker">
                <option value={themes.LIGHT}>Light Mode</option>
                <option value={themes.DARK}>Dark Mode</option>
                <option value={themes.ONE}>One</option>
                <option value={themes.TWO}>Two</option>
                <option value="">More themes, soon...</option>
            </select>
        </Label>
    )
}

export default ThemePicker
