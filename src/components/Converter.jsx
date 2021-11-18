import React,{useState} from 'react';
import styled from 'styled-components'
import InputRow from './input/InputRow';



const Converter = () => {
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [amountInfromCurrency, setAmountInfromCurrency] = useState(true);

    let toAmount, fromAmount;
    if(amountInfromCurrency){
        fromAmount = amount
        toAmount = amount * 3
    }else {
        toAmount = amount
        fromAmount = amount / 3
    }
    const handelFromAmountChange = (e) =>{
        setAmount(e.target.value);
        setAmountInfromCurrency(true)
    }
    const handelToAmountChange = (e) =>{
        setAmount(e.target.value);
        setAmountInfromCurrency(false)
    }

    return (
        <Container>
            <h2>The Converter</h2><br />
            <inputContainer>
            <Input1>
            <h3>NEP</h3>
            <InputRow 
            onChangeAmount={handelFromAmountChange}
            amount = {fromAmount}
            />
            </Input1>
            <Input2>
            <h3>BUSD</h3>
            <InputRow
            onChangeAmount={handelToAmountChange}
            amount={toAmount}
            />
            </Input2>
            </inputContainer>
        </Container>
    )
}

export default Converter;
const Container = styled.div`
            border-right: 2px solid white;
            padding-left:.8rem;
            width:100%;
            height: 60vh;
            text-align: center;
            align-content: center;
            justify-content: center;
            h2{
                padding-top: 1.2rem;
            }
            div{
                padding-top: .5rem;
            }
            @media (max-width: 768px) {     
            margin-left:0rem;
            width: 100%;
            border-right: none;
            }
`;
const inputContainer = styled.div`
background-color: red;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
`;
const Input1 = styled.div`
margin-top: 3rem;
`;
const Input2 = styled.div`
`;