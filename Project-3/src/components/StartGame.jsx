
import styled from 'styled-components'
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <MainContainer>
       <div className="dic_img">
         <img src="/images/dices.png" alt="DiceImage" />
       </div>
       <div className="dic_content">
         <h1>DICE GAME</h1>
         <Button onClick={toggle}>Play Now</Button>
       </div>
    </MainContainer>
  )
}

export default StartGame

const MainContainer = styled.div`
     max-width: 1080px;
     display: flex;
     justify-content: center;
     align-items: center;
     margin: 0 auto;
     min-height: 100vh;

    .dic_content{
        display: flex;
        flex-direction: column;
        align-items: end;
        h1{
            font-size: 90px;
            font-weight: 700;
        }
    }
`;

