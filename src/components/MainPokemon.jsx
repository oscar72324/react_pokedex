import { useState, useEffect } from "react";
import Card from "./Card";
import classes from './MainPokemon.module.css'

const MainPokemon = () => {
    const [pokemon, setPokemon] = useState([])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [prevUrl, setPrevUrl] = useState();
    const [nextUrl, setNextUrl] = useState();
    const [isLoading, setIsLoading] = useState(true)

    

    useEffect(() => {
        const getPokemon = async() => {
            setIsLoading(true)
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)
            eachPokemon(data.results);
            setPrevUrl(data.previous);
            setNextUrl(data.next);
            setIsLoading(false);
        }
        const eachPokemon = async (res) => {
            res.map(async (item) => {
                const results = await fetch(item.url);
                const resultsData = await results.json()
                // console.log(resultsData)
                setPokemon(state=>{
                    state=[...state,resultsData]
                    state.sort((a,b)=>a.id>b.id?1:-1)
                    return state;
                })
            })
        }
        getPokemon()
    }, [url])

    return ( 
        <div>
        <div>
            <Card pokemon={pokemon} loading={isLoading}/>

            <div className={classes.buttons}>
                {prevUrl && <button className={classes.btn} 
                onClick={() => {
                    setPokemon([]);
                    setUrl(prevUrl)
                }}>Previous</button>}

                {nextUrl && <button className={classes.btn} 
                onClick={() => {
                    setPokemon([]);
                    setUrl(nextUrl)
                }}>Next</button>}
            </div>
        </div>
        </div>
     );
}
 
export default MainPokemon;