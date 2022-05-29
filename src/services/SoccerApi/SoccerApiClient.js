
// export const get = fetch(`https://api.soccersapi.com/v2.2/leagues/?user=gonzalez.marco95&token=1824223350a41dcc839d14fe2dd8e597&t=list`)

import SoccerApiFixture from "./SoccerApiFixture";

export async function players(countryId) {
    const body = await Promise.resolve(SoccerApiFixture);
    return body;
    
    
    // const response = await fetch(`https://api.soccersapi.com/v2.2/players/?user=gonzalez.marco95&token=1824223350a41dcc839d14fe2dd8e597&t=list&country_id=${countryId}`);
    // const body = await response.json();
    // return body;
}
