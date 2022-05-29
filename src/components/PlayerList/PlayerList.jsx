import React, { useState, useEffect } from 'react';
import * as SoccerApiService from '../../services/SoccerApi/SoccerApiService';

export const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        SoccerApiService.getPlayers(5).then((response) => {
            setPlayers(response);
        });
    }, []);

    return <div>PlayerList count: {players.length}</div>;
};

export default PlayerList;
