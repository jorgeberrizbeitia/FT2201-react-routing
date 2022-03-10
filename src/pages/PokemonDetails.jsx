import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function PokemonDetails() {

  const { pokemon } = useParams()

  // componente vista/pagina que buscará los detalles del pokemon y los renderizará
  const [ detailsPokemon, setDetailsPokemon ] = useState(null)

  // axios
  const getDetails = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response)
    // guardaremos la info en detailsPokemon
    setDetailsPokemon(response.data)
  }

  useEffect(() => {
    getDetails()
    // como component did mount y como component did update de pokemon 
  }, [pokemon])
  // esta dependencia significa, revisa cuando hayan cambios y vuelve a ejecutar

  
  if (!detailsPokemon) {
    return <div>...Loading</div>
  } 

  return (

    <div>
    
      <h3>{detailsPokemon.name}</h3>
      <img src={detailsPokemon.sprites.back_default} alt="pokemon" />
      <p>{detailsPokemon.height}</p>
      <p>{detailsPokemon.weight}</p>
    
    </div>
  )
}

export default PokemonDetails