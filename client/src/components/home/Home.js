import React from 'react'
import "./home.css"
import Hero from './Hero';
import BeFreelancer from './BeFreelancer';
// import Footer from './Footer';

// search everything that has "search-string" in it

function Home() {
    return (
        <div className="home-page">
            {/* <div className="black-layer"></div> */}
            <Hero/>
            <BeFreelancer />
            {/* <Footer /> */}
        </div>
    )
}

export default Home
