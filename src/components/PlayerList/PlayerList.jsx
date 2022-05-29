import React, { useState, useEffect } from 'react';
import * as SoccerApiService from '../../services/SoccerApi/SoccerApiService';
import Player from '../Player/Player';
import { PlayerListHeader, PlayerListStyled } from './PlayerList.styled';

export const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        SoccerApiService.getPlayers(5).then((response) => {
            setPlayers(response);
        });
    }, []);

    return (
        <PlayerListStyled>
            <h2>Players</h2>
            <PlayerListHeader>
                <strong>Photo</strong>
                <strong>Name</strong>
                <strong>Position</strong>
                <strong>Foot</strong>
            </PlayerListHeader>
            {players.map((player, key) => {
                return <Player key={key} player={player} />;
            })}
        </PlayerListStyled>
    );
};

export default PlayerList;
