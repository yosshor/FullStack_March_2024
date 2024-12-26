import { createContext } from "react";

const initialState = {mode: 'light', toggleTheme: () => {}}

export const ThemeContext = createContext(initialState);