import { createContext } from "react";

const initialState = {mode: 'brown', toggleTheme: () => {}}

export const BrownContext = createContext(initialState);