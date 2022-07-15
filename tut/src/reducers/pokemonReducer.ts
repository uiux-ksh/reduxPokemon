import InitialStateInterface from "../interface/InitialStateInterface";
import {POKEMON_FAIL, POKEMON_SUCCESS,PokemonDispatchType} from "../actionType/pokemonActionType";



const initialState: InitialStateInterface ={
   success:false
}

const pokemonReducer = (state=initialState,action:PokemonDispatchType) => {
      switch (action.type){
          case POKEMON_SUCCESS:
              const {abilities,sprites} = action.payload
              return {
                  ...state,
                  success: true,
                  pokemon:{
                      abilities,
                      sprites
                  }
              }
          case POKEMON_FAIL:
              return {...state,success:false}
          default:
              return state;
      }
}

export default  pokemonReducer;