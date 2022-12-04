import { useState, useEffect } from "react"
import useFetch from "use-http"

function PokeCard({getNewPokemon, pokemonInfo}) {

    const [movesOpen, setMovesOpen] = useState(false)

    const handleMovesAccordian = () => {
        if (movesOpen) {
            setMovesOpen(false)
        } else {setMovesOpen(true)}
    }

    return(
        <>
            <h1>PokeCard</h1>
            <p>Name: {pokemonInfo.name}</p>
            <div>Type(s): {pokemonInfo.types.map(e => <li key={'type', e}>{e}</li>)}</div>
            <p>Weight: {pokemonInfo.weight} lbs</p>
            <p>HP (health points): {pokemonInfo.stats.hp}</p>
            <p>Attack: {pokemonInfo.stats.attack}</p>
            <p>Defense: {pokemonInfo.stats.defense}</p>
            <p>Sp.Attack: {pokemonInfo.stats.special_attack}</p>
            <p>Sp.Defense: {pokemonInfo.stats.special_defense}</p>
            <p>Speed: {pokemonInfo.stats.speed}</p>
            <div>
                <div onClick={() => {handleMovesAccordian()}}
                >Moves: {movesOpen ? '-' : '+'}</div>
                {movesOpen && <div>{pokemonInfo.moves.map(e => <li key={'move', e}>{e}</li>)}</div>}
            </div>
        </>
    )
}

export default PokeCard