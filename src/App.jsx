import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import CoachList from './components/CoachList/CoachList';
import Header from './components/Header/Header';
import PlayerList from './components/PlayerList/PlayerList';
import Selection from './components/Selection/Selection';
import { MainSection, TeamSection } from './App.styled';

const App = () => {
    return (
        <Provider store={store}>
            <Header>Your Adidas Team</Header>
            <MainSection>
                <TeamSection>
                    <Selection />
                    <CoachList />
                    <PlayerList />
                </TeamSection>
            </MainSection>
        </Provider>
    );
};

export default App;
