
import styled from 'styled-components'

const RollDice = ({currentDice, rollDice}) => { 
  return (
    <DiceContainer>
        <div className="rolldice_img" onClick={rollDice}>
            <img src={`/images/Dice/dice_${currentDice}.png`} alt="dice-images" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 50px;
   
  .rolldice_img{
     cursor: pointer;
   }
   .rolldice_img img{
     max-width: 160px;
   }
  p{
      font-size: 25px;
      font-weight: 200;
  }

`;