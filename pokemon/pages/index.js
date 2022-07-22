import {useState, useMemo, useEffect} from "react";
import styles from '../styles/Home.module.css'
const url ='https://jherr-pokemon.s3.us-west-1.amazonaws.com';

export async function  getServerSideProps() {
  const res = await  fetch(`${url}/index.json`);
  return{
      props:{
          pokemon: await res.json(),
      },
  };

}




export default function Home({pokemon}) {
    const [input,setInput]=useState("");

    const filteredPokemon = useMemo(
        () => pokemon.filter((p) => p.name.toLowerCase().includes(input.toLowerCase())),
        [input,pokemon]
    );

  return (
      <>

          <p className={styles.inputBox}><input type="text" value={input} onChange={(e) => setInput(e.target.value)} className={styles.search}/></p>
      <div className={styles.container}>
          {filteredPokemon.slice(0, 40).map((p) => (
              <div key={p.id} className={styles.image}>
                  <img
                      alt={p.name}
                      src={`${url}/${p.image}`}
                  />
                  <h2>{p.name}</h2>
              </div>
          ))}
      </div>
      </>
  )
}
