import './App.css'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import ScoreBoard from './components/ScoreBoard'
import Result from './components/Result'
import { useSelector } from 'react-redux'

function App() {
  const {isGameFinished} = useSelector(state => state.cards)

  return (
    <>
      <ScoreBoard />
      <div className='container mx-auto '>
        <Header />
        <GameBoard />
      </div>
      {isGameFinished && <Result/>}
    </>
  )
}

export default App
