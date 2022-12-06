import {useState} from 'react'

function PokeSearch({getNewPokemon}) {

    const [filter, setFilter] = useState('')

    // console.log('PokeSearch rerendering')

    return(
        <>
            <h1>Search Pokemon</h1>
            <input
                type="text"
                placeholder="search for a pokemon..."
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
                <button onClick={() => getNewPokemon(filter)}>
                Get pokemon's info</button>
            {/* <ul>
                <li>list item</li>
                <li>list item</li>
                <li>list item</li>
            </ul> */}
            

        </>
    )
}

export default PokeSearch