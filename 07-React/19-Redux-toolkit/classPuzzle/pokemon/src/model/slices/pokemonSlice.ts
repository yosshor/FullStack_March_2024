import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  pokemonName: string;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemonName: "",
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonName(state, action: PayloadAction<string>) {
      state.pokemonName = action.payload;
    },
    fetchPokemonsStart(state) {
        state.loading = true;
        state.error = null;
    },
    fetchPokemonsSuccess(state, action: PayloadAction<string>) {
        state.loading = false;
        state.pokemonName = action.payload;
    },
    fetchPokemonsFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
    },
  },
});

export const { setPokemonName } = pokemonSlice.actions;
export const selectPokemonName = (state: { pokemon: PokemonState }) => state.pokemon.pokemonName;
export default pokemonSlice.reducer;
