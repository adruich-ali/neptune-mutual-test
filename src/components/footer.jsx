import React from 'react'
import styled from 'styled-components';
import Logo from '../imgs/logo&name.png'

const footer = () => {
    return (
        <Container>
            <LogoContainer>
            <Logoo src={Logo}alt="Logo"/>
            </LogoContainer>
        </Container>
    )
}

export default footer;
const Container = styled.div`

`;

const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

`;
const Logoo = styled.img`
width: 20%;
`;

