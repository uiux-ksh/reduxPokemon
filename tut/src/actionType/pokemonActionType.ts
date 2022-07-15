import pokemonAbilityInterface from '../interface/pokemonAbilityInterface';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS'
export const POKEMON_FAIL = 'POKEMON_FAIL'

export type PokemonType = {
    abilities:pokemonAbilityInterface[]
    sprites:pokemonSprites
}

export type pokemonSprites={
    front_default:string
}


export interface  pokemonFailDispatch{
    type: typeof POKEMON_FAIL
}

export interface  pokemonSuccesslDispatch{
    type: typeof POKEMON_SUCCESS
    payload:{
        abilities:pokemonAbilityInterface[]
        sprites:pokemonSprites
    }
}

export type PokemonDispatchType = pokemonFailDispatch|pokemonSuccesslDispatch;