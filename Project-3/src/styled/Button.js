
import styled from 'styled-components'


export const Button = styled.button`

padding: 10px 18px;
border-radius: 5px;
background: #000;
color:#fff;
min-width: 200px;
border: none;
font-size: 16px;
border: 1px solid #000;
cursor: pointer;
transition: 0.4s  background ease;
&:hover{
    background: #fff;
    border: 1px solid #000;
    color: #000;
    transition: 0.3s  background ease;
}
`;

export const BorderButton = styled(Button)`
    background: #fff;
    border: 1px solid #000;
    color: #000;
&:hover{
    background: #000;
    border: 1px solid #000;
    color: #fff;
}
`;