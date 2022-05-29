import * as SoccerApiClient from './SoccerApiClient';
export async function getPlayers(countryId) {
    const response = await SoccerApiClient.players(countryId);
    const {data} = response;

    if(!data) {
        throw new Error('No response data');
    }

    const result = data.map((item) => {
        return {
            id: item.id,
            teamId: item.team_id,
            commonName: item.common_name,
            name: item.name,
            foot: item.foot,
            position: item.position,
            img: item.img,
        };
    });

    return result;
}