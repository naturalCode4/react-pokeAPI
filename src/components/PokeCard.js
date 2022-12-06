import { useState, useEffect } from "react"

function PokeCard({getNewPokemon, pokemonInfo}) {

    const [movesOpen, setMovesOpen] = useState(false)

    const handleMovesAccordian = () => {
        if (movesOpen) {
            setMovesOpen(false)
        } else {setMovesOpen(true)}
    }

    console.log('pokemonInfo', pokemonInfo)

    return(
        <>
            <p>Name: {pokemonInfo.name.slice(0,1).toUpperCase() + pokemonInfo.name.slice(1,pokemonInfo.name.length)}</p>
            <img src={pokemonInfo.image} style={{width: '75vw', position: 'absolute', top: '10vh', left: '12.5vw', zIndex: '-100', opacity: '.6'}}></img>
            <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', gap: '15px'}}>
                <button onClick={() => getNewPokemon(pokemonInfo.national_pokedex - 1)}>-</button>
                <p>National Pokedex: #{pokemonInfo.national_pokedex}</p>
                <button onClick={() => getNewPokemon(pokemonInfo.national_pokedex + 1)}>+</button>
            </div>
            <br></br>
            <div>Type(s): {pokemonInfo.types.map(e => <li key={'type', e}>{e}</li>)}</div>
            <p>Weight: {pokemonInfo.weight/10} kgs</p>
            <p>Size: {pokemonInfo.height/10} meters</p>
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