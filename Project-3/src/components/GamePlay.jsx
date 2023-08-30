import { useState } from 'react'
import styled from 'styled-components'
import TotalScore from "./TotalScore"
import NumberSlector from './NumberSlector'
import RollDice from './RollDice'
import { BorderButton, Button } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {

  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [numberSlected, setNumberSlected] = useState();
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {

    if (!numberSlected) {
      setError('You have not selected any number');
      return
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);


    if (currentDice == numberSlected) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setNumberSlected('undefined');
  }

  const resetButton = ()=> {
    setScore(0);
  }

  const ruleShow = () => {
    setShowRules((prev) => !prev);
  }

  return (
    <MainContainer>

      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSlector
          error={error}
          setError={setError}
          numberSlected={numberSlected}
          setNumberSlected={setNumberSlected} />
      </div>
      <RollDice
        currentDice={currentDice}
        rollDice={rollDice} />

      <div className="btn">
        <BorderButton onClick={resetButton} > Reset Score </BorderButton>
        <Button onClick={ruleShow}> {showRules ? 'Hide' : 'Show'} Rules</Button>
      </div>

      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    margin: 40px 0;

   .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
   }

   .btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    gap: 10px;
   }
`;


