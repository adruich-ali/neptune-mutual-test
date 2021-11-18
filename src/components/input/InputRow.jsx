import React from 'react';
import styled from 'styled-components';

function InputRow(props) {
    const {
        amount,
        onChangeAmount
    } = props;
    return (
        <CurrncyInput>
            <input type="number" value={amount} onChange={onChangeAmount}/>
        </CurrncyInput>
    )
}

export default InputRow;

const CurrncyInput = styled.div`
width: 100%;
input{
    background-color: transparent;
    border: 1px solid #ffffff;
    width: 80%;
    height: 3rem;
    color: white;
    border-radius: .5rem;
    font-size: 1.4rem;
    transition: all .5s ease;
    :focus {
    background-color: #161A1D    ;
    }
}
`;
