import React, { useEffect, useState } from 'react';
import * as SoccerApiService from '../../services/SoccerApi/SoccerApiService';
import Coach from '../Coach/Coach';
import { CoachListHeader, CoachListStyled } from './CoachList.styled';

const CoachList = () => {
    const [coaches, setCoaches] = useState([]);
    useEffect(() => {
        SoccerApiService.getCoaches(5).then((response) => {
            setCoaches(response);
        });
    }, []);

    return (
        <CoachListStyled>
            <h2>Coaches</h2>
            <CoachListHeader>
                <strong>Photo</strong>
                <strong>Name</strong>
            </CoachListHeader>
            {coaches.map((coach, key) => {
                return <Coach key={key} coach={coach} />;
            })}
        </CoachListStyled>
    );
};

export default CoachList;
