import * as SoccerApiClient from './SoccerApiClient';

export async function getPlayers(countryId) {
    const response = await SoccerApiClient.players(countryId);

    if(!response?.data) {
        throw new Error('No response data');
    }

    const result = response.data.map((player) => {
        return {
            id: player.id,
            teamId: player.team_id,
            commonName: player.common_name,
            name: player.name,
            foot: player.foot,
            position: player.position,
            img: player.img,
        };
    });

    return result;
}

export async function getCoaches(countryId) {
    const response = await SoccerApiClient.coaches(countryId);
    
    if(!response?.data) {
        throw new Error('No response data');
    }

    const result = response.data.map((coach) => {
        return {
            id: coach.id,
            commonName: coach.common_name,
            img: coach.img
        };
    });

    return result;
}