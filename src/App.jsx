import React from 'react';
import CoachList from './components/CoachList/CoachList';
import Header from './components/Header/Header';
import PlayerList from './components/PlayerList/PlayerList';

const App = () => {
    return (
        <>
            <Header>Your Adidas Team</Header>
            <main>
                <CoachList />
                <PlayerList />
            </main>
        </>
    );
};

export default App;
