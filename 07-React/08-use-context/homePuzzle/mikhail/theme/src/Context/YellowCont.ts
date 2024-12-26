import { createContext } from "react";

const initialState = {mode: 'yellow', toggleTheme: () => {}}

export const YellowContext = createContext(initialState);