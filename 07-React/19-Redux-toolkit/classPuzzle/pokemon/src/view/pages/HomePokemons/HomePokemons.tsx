import React from 'react'
import Pokemon from '../../components/pokemon/Pokemon'
import './HomePokemon.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectPokemonName } from '../../../model/slices/pokemonSlice'
import { useGetPokemonByNameQuery } from '../../../services/pokemon'


const HomePokemons = () => {
    const pokemonName = useSelector(selectPokemonName)
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName || 'bulbasaur');

    return (

        <>
            <div className='home-wrapper'>
                <h1 className='text-3xl text-center'>Choose your Pokemon!</h1>
                {data &&
                    <div >
                        <img src={data!.sprites.back_default}
                            alt={data!.species.name} />
                    </div>
                }
            </div>
            <div>

                <Pokemon name='bulbasaur' left='2vw' bottom='5vh' />
                <Pokemon name='charmander' left='12vw' bottom='5vh' />
                <Pokemon name='squirtle' left='22vw' bottom='5vh' />
                <Pokemon name='pikachu' left='32vw' bottom='5vh' />
                <Pokemon name='jigglypuff' left='42vw' bottom='5vh' />
                <Pokemon name='meowth' left='52vw' bottom='5vh' />
                <Pokemon name='psyduck' left='62vw' bottom='5vh' />
                <Pokemon name='machop' left='72vw' bottom='5vh' />
                <Pokemon name='gengar' left='82vw' bottom='5vh' />
                <Pokemon name='eevee' left='92vw' bottom='5vh' />
            </div>
        </>
    )

}

export default HomePokemons