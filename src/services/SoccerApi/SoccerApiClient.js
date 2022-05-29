
// export const get = fetch(`https://api.soccersapi.com/v2.2/leagues/?user=gonzalez.marco95&token=1824223350a41dcc839d14fe2dd8e597&t=list`)

import SoccerApiFixturePlayers from "./Fixtures/SoccerApiFixture.players";
import SoccerApiFixtureCoaches from "./Fixtures/SoccerApiFixture.coaches";

export async function players(countryId) {
    const body = await Promise.resolve(SoccerApiFixturePlayers);
    return body;

    // const response = await fetch(`https://api.soccersapi.com/v2.2/players/?user=gonzalez.marco95&token=1824223350a41dcc839d14fe2dd8e597&t=list&country_id=${countryId}`);
    // const body = await response.json();
    // return body;
}

export async function coaches(countryId) {
    const body = await Promise.resolve(SoccerApiFixtureCoaches);
    return body;
     
    // const response = await fetch(`https://api.soccersapi.com/v2.2/coaches/?user=gonzalez.marco95&token=1824223350a41dcc839d14fe2dd8e597&t=list&country_id=${countryId}`);
    // const body = await response.json();
    // return body;
}
