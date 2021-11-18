import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import Homepage from './components/Homepage';

const App = () => {
    return(      
        <div>
            <section>
            <Header/>
            </section>
            <section>
            <Homepage />
            </section>
            <section>
            <Footer />
            </section>
        </div>
    )
}

export default App;


