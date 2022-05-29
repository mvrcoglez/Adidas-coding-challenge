import React from 'react';
import Header from './components/Header/Header';
import PlayerList from './components/PlayerList/PlayerList';

const App = () => {
    return (
        <>
            <Header>Your Adidas Team</Header>
            <main>
                <PlayerList />
            </main>
        </>
    );
};

export default App;
