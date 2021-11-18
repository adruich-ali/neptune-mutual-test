import { useWeb3React } from '@web3-react/core'
import React from 'react'
import styled from 'styled-components'
import { injected } from './wallet/connectors'


const Walletlogin = () => {
    const {active, account, activate, deactivate } = useWeb3React()

    async function connect() {
        try {
        await activate(injected)
        }catch(ex){
            console.log(ex)
        }
    }
    async function disconnect() {
        try {
            deactivate();
        }catch(ex){
            console.log(ex)
        }
    }

    return (
        <Container>
                <h2>Connect to the wallet</h2>
                <ConnectionZone>
                <Button onClick={connect}>Connect To Metamask</Button>
                <Button onClick={disconnect}>Disconnect From Metamask</Button> 
                </ConnectionZone>
                <ConnectedText>
                {active 

                ?
                
                  <h4>Connected successfully <br/><br/> Connected with <b>{account}</b></h4>  
                : <h4>Not Connected</h4>}
                </ConnectedText>
            
        </Container>
    )
}

export default Walletlogin

const Container = styled.div`
            text-align: center;
            width: 100%;
            height: 80vh;
            h2{
                padding-top: 1.2rem;
            }
            @media (max-width: 768px) {
            width: 100%;
            }
`;
const ConnectionZone = styled.div`
padding-top: 5rem;
display: flex;
flex-direction: row;
justify-content: center;
@media (max-width: 768px) {     
    flex-direction: column;
    justify-content: center;
    align-items: center;
            }

`;
const Button = styled.div`
margin-left:2rem ;
margin-right:2rem ;
padding-top: 1.3rem;
padding-bottom: 1.3rem;
width: 16rem;
height: 4rem;
background-color: transparent;
border: 1px solid white;
border-radius: 2rem;
cursor: pointer;
transition: all .5s ease;
&:hover{
    background-color: #183D73;
}
@media (max-width: 768px) {     
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
            }
`;
const ConnectedText = styled.div`
padding-top: 2rem;
color: #0a2f68;
h4{
    color: white;
    b{
        color: #0a2f68;
    }
}

`;