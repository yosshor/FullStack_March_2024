import React, { FC } from 'react'
import { useGetPokemonByNameQuery } from '../../../services/pokemon'
import './Pokemon.scss'
import { useDispatch } from 'react-redux'

interface PokemonProps {
    name: string,
    left: string,
    bottom: string
}

const Pokemon: FC<PokemonProps> = ({ name, left, bottom }) => {
    const { data, error, isLoading } = useGetPokemonByNameQuery(name);
    const dispatch = useDispatch();

    const handleClickImg = () => {
        dispatch({ type: 'pokemon/setPokemonName', payload: data!.species.name })
    }
    return (
        <>
            {data &&
                data ?
                <div
                    className='pokemon-wrapper'
                    style={{
                        bottom: bottom,
                        left: left
                    }}
                    onClick={handleClickImg}>
                    <img src={data.sprites.back_default}
                        alt={data.species.name}
                        style={{
                            width: '90%',
                            justifyContent: 'center',
                            display: 'flex'
                        }} />
                    <label>{data.species.name}</label>
                </div >
                : 'Loading...'}
        </>
    )
}

export default Pokemon