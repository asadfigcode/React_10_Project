
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (

    <ScoreConatainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreConatainer>
  )
}

export default TotalScore

const ScoreConatainer = styled.div`
    max-width: 200px;
    text-align: center;

      h1{
        font-size: 80px;
        font-weight: 500; 
        line-height: 90px;
      }

      p{
        font-size: 18px;
        font-weight: 400;
      }
`;