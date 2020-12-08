import React from 'react';
import FilmsCatalog from '../Components/FilmsCatalog';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <FilmsCatalog/>
            <Footer/>
        </div>
    )
};

export default Home;
