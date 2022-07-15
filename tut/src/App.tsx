import React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./reducers/store";
import './App.css';
import {fetchPokemonData} from "./actions/pokemonActions";

function App() {
    const [pokemonName,setPokemonName] = useState("")
    const pokemonReducer = useSelector((state:RootReducerType) => state.pokemonReducer);
    const dispatch = useDispatch()
   console.log(pokemonReducer);
    const handlePokemonName = (event:React.ChangeEvent<HTMLInputElement>) => {
     setPokemonName(event.target.value);
    }
    const searchButtonName = () =>{
        dispatch(fetchPokemonData(pokemonName))
    }

  return (
    <div className="App">
        <input type="text" onChange={handlePokemonName}/>
        <button onClick={searchButtonName}>포켓몬찾기</button>
        <div className='pokemon'>
            {pokemonReducer.success&& <div>
                <p>{pokemonName}</p>
                {pokemonReducer.pokemon?.abilities.map((ability:any) => {
                    return <div><p>{ability.name}</p> </div>

                })}
                <img src={pokemonReducer.pokemon?.sprites.front_default} alt=""/>

            </div>}
            <ul>
                <li className='title'>포켓몬 이름들은 검색창에 입력해주세요</li>
                <li>bulbasaur ivysaur</li>
                <li>venusaur charmander</li>
                <li>charmeleon charizard</li>
                <li>wartortle blastoise</li>
                <li>caterpie metapod</li>
                <li>butterfree weedle</li>
                <li>kakuna beedrill pidgey</li>
                <li>pidgeotto pidgeot</li>
                <li>rattata raticate</li>
            </ul>
        </div>
    </div>
  );
}

export default App;
