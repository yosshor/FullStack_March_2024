import { createContext } from "react";

const initialState = {mode: 'purple', toggleTheme: () => {}}

export const PurpleContext = createContext(initialState);