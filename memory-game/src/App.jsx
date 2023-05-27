import './App.css'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'


function App() {


  return (
    <>
      <ScoreBoard />
      <div className='container mx-auto '>
        <Header />
        <GameBoard />
      </div>
    </>
  )
}

export default App
