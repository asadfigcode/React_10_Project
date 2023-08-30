
import { styled } from "styled-components"

const Rules = () => {
  return (
    <RuleContainer>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 800px;
margin:0 auto;
border-radius: 5px;
margin-top: 30px;
    background: #FBF1F1;
    padding: 20px;
   h2{
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 10px;
   }
   p{
    font-size: 20px;
    font-weight: 200;
   }
`;