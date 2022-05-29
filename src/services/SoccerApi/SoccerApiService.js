
// export const get = fetch(`https://api.soccersapi.com/v2.2/leagues/?user=gonzalez.marco95&token=d9fb37588d02c7d7a1b5bb2d1b3f9e97&t=list`)

import SoccerApiFixture from "./SoccerApiFixture";

export async function getPlayers(countryCode) {
    return await Promise.resolve(SoccerApiFixture);
    // const response = await fetch(`https://api.soccersapi.com/v2.2/leagues/?user=gonzalez.marco95&token=d9fb37588d02c7d7a1b5bb2d1b3f9e97&t=list&country_id=${countryCode}`);
    // const body = await response.json();
    // console.log(body);
}
