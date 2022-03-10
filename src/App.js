
import './App.css';
import TimerControl from './pages/TimerControl';
import Home from "./pages/Home"
import About from './pages/About';
import Profile from "./pages/Profile"
import NotFound from './pages/NotFound';

import { Routes, Route, Link } from "react-router-dom"
import PokemonList from './components/PokemonList';
import PokemonDetails from './pages/PokemonDetails';

// function App() {

//   return (
//     <div className="App">

//       {/* <TimerControl/> */}

//       {/* aunque esto funciona, no debemos usar anchor tags en React */}
//       {/* <a href="/">Home</a>
//       <a href="/about">About</a> */}

//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>

//       <h1>Mi pagina Web</h1>

//       <Routes>

//         {/* aqui irian organizadas todas nuestras rutas */}

//         <Route path="/" element={ <Home/> }/>
//         <Route path="/about" element={ <About />} /> 
//         <Route path="/profile/:name" element={ <Profile/> } />
//         <Route path="*" element={ <NotFound /> } />

//       </Routes>

//     </div>
//   );
// }

function App() {

  

  return (
    <div className="App">

      <h1>Mi pagina de Pokemons</h1>

      <div id="pokemon-page">
        <PokemonList/>

        <Routes>

          <Route path="/" element={ <Home/> }/>
          <Route path="/pokemon/:pokemon" element={ <PokemonDetails/> }  />

        </Routes>
      </div>


    </div>
  )

}


export default App;
