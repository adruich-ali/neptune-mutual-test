import React from 'react'
import styled from 'styled-components'
import Converter from './Converter';
import Walletlogin from './Walletlogin';

const Homepage = () => {
    return (
        <Container>
            <LeftSide>
                <Converter />
            </LeftSide>

            <RightSide>    
                <Walletlogin />
            </RightSide>
        
        </Container>
    )
}

export default Homepage;
const LeftSide = styled.div`
            margin-left:.8rem;
            width: 100%;
            @media (max-width: 768px) {
            margin-left:0rem;
            width: 80%;
            }
`;
const RightSide = styled.div`
            margin-left:.5rem;
            margin-right:.8rem;
            width: 100%;
            @media (max-width: 768px) {
            margin-top: 1rem;
            margin-left:0rem;
            margin-right:0rem;
            width: 80%;
            }
`;
const Container = styled.div`

            padding-top:5rem;
            height: 73vh;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            overflow: hidden;
            @media (max-width: 768px) {
                flex-direction: column;
                align-items: center;
                height: 100%;
            }
`;

