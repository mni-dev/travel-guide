import React from 'react';
import './Home.css'

const Home = () => {
    const myStyle = {
        backgroundImage:
        "url('https://i.ibb.co/WG6spPP/bodybg.png')",
        height: '100vh',
        marginTop: '-40px',
        fontSize: '30px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
         
            <div style={myStyle}>
                <h1>Your Travel Guide</h1>
            </div>
        
    );
};

export default Home;