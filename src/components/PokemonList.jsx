import { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

function PokemonList() {

  const [ listOfPokemons, setListOfPokemons ] = useState([])

  const getPokemons = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=2000")
    console.log(response)
    setListOfPokemons(response.data.results)
  }

  useEffect(() => {
    // aqui haremos las llamadas a la API
    // axios.get("https://pokeapi.co/api/v2/pokemon")
    // .then(response => {
    //   console.log(response)
    // })

    getPokemons()

  }, [])

  return (
    <div>
  
      <h3>Pokemons</h3>

      {listOfPokemons.map((eachPokemon, index) => {
        {/* return <p key={index+eachPokemon.name}>{eachPokemon.name}</p> */}
        return (
          <div key={index+eachPokemon.name}>
            <Link to={`/pokemon/${eachPokemon.name}`}>{eachPokemon.name}</Link>
          </div>
        )
      })}

    </div>
  )
}

export default PokemonList