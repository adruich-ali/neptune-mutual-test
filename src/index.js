import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core';
import web3 from 'web3'

 const getLibrary = (provider) =>{
     
    return new web3(provider)
}

ReactDom.render(
  <Web3ReactProvider getLibrary={getLibrary}>
            <App/>
    </Web3ReactProvider>
    ,document.getElementById('root'));