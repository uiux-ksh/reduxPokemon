import {PokemonType} from "../actionType/pokemonActionType";

interface InitialStateInterface {
    success:boolean;
    pokemon?:PokemonType;
}

export  default  InitialStateInterface;