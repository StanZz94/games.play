import Header from "../components/header/Header"
import Home from "../components/home/Home"
import GamesList from "../components/games-list/GamesList"
import CreateGame from "../components/create-game/CreateGame"
import Register from "../components/register/Register"
import Login from "../components/login/Login"
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <div id='box'>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/games' element={ <GamesList /> } />
        <Route path='/create' element={ <CreateGame /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </div>
  )
}

export default App
