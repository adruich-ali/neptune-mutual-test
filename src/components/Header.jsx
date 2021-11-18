import React from 'react';
import styled from 'styled-components';
import Logo from  '../imgs/neptune-mutual.png';

const Header = () => {
    return (
        <Container>
            <LogoContainer>
            <img src={Logo}alt="Logo"/>
            </LogoContainer>
        </Container>
    )
}

export default Header;
const Container = styled.div`
padding-top: 1.5rem ;
`;
const LogoContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
