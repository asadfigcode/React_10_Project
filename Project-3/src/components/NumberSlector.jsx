
import styled from 'styled-components'

const NumberSlector = ({error, setError, numberSlected, setNumberSlected}) => {

const arrayNumber = [ 1,2,3,4,5,6 ];

const numberSelectorHndler = (value) => {
  setNumberSlected(value)
  setError('');
}

  return (
    <NumberContainer>
      <p className='diceError'>{error}</p>
        <div className='flex'>
            {
                arrayNumber.map((value, i) => {
                return(
                    <Box key={i}
                     onClick={() => numberSelectorHndler(value)}
                     isSlected={value == numberSlected}>{value}</Box>
                )
                })
            }
        </div>
        <p>Select Number</p>
     
    </NumberContainer>
  )
}

export default NumberSlector

const NumberContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
gap: 5px;

.diceError{
  color:#FF0C0C;
  font-size: 1.6rem;
  font-weight: 300;
}

   .flex{
    display: flex;
    gap: 24px;
   }
   p{
    font-size: 22px;
    font-weight: 500;
   }
`;

const Box = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  background-color: ${(props)=> (props.isSlected ? "#000" : "#fff")};
  color: ${(props)=> (!props.isSlected ? "#000" : "#fff")};
`;