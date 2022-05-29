import React from 'react';
import Header from './components/Header/Header';
// import { getPlayers } from './services/SportDataApi/SportDataApiService';
import { getPlayers } from './services/SoccerApi/SoccerApiService';

const App = () => {
    getPlayers(4).then((response) => {
        console.log(response);
    });

    return (
        <>
            <Header>Your Adidas Team</Header>
            <main></main>
        </>
    );
};

export default App;
