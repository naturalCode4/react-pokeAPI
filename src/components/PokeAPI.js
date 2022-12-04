import {useState, useEffect, Fragment} from 'react'
import PokeCard from './PokeCard'
import PokeSearch from './PokeSearch'
import useFetch from 'use-http'
import axios from 'axios'

const pokeAPIBaseUrl = 'https://pokeapi.co/api/v2/pokemon/'

function PokeAPI() {

    const [pokemonInfo, setPokemonInfo] = useState({
        name: '',
        types: [],
        weight: '',
        stats: {
            hp: '',
            attack: '',
            defense: '',
            special_attack: '',
            special_defense: '',
            speed: '',
        },
        moves: []
    })

    useEffect(() => {
        getNewPokemon('zapdos')
        console.log('pokemonInfo', pokemonInfo)
    }, [])

    console.log('PokeAPI rerendering')

    const getNewPokemon = (pokemonName) => {
        axios
        .get(pokeAPIBaseUrl + pokemonName.toLowerCase())
        .then(res => {
            const newPokemon = {
                name: res.data.name,
                types: res.data.types.map(e => e.type.name),
                weight: res.data.weight,
                stats: {
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    special_attack: res.data.stats[3].base_stat,
                    special_defense: res.data.stats[4].base_stat,
                    speed: res.data.stats[5].base_stat,
                },
                moves: res.data.moves.map(e => e.move.name)
            }
            setPokemonInfo(newPokemon)
        })
        .catch(err => console.log('Error', err))
    }

    return(
        <>
            <PokeSearch
                getNewPokemon={getNewPokemon}
            />
            <PokeCard
                pokemonInfo={pokemonInfo}
                getNewPokemon={getNewPokemon}
            />
            {/* {pokemonInfo && <PokeCard
                pokemonInfo={pokemonInfo}
                getNewPokemon={getNewPokemon}
            />} */}
        </>
    )
}

export default PokeAPI

/* plan

- on page load, using useeffect and usefetch, page loads up a pokemon's info/image. 
- users can search in bar and it loads all the pokemon that start with that name (assuming there is an endpoint that has all the pokemon)
- users can click on that pokemon and it changes the card to that pokemon
- implement spinner while waiting for pokemon card

*/