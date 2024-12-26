import { createContext } from "react";

const initialState = {mode: 'blue', toggleTheme: (color: string) => {}}

export const BlueContext = createContext(initialState);