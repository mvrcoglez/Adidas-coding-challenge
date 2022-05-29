export async function getPlayers(countryCode) {
    const headers = {
        apikey: "987dbfc0-dba2-11ec-9ed1-fb9e7f972bf8",
    };

    const response = await fetch(`https://app.sportdataapi.com/api/v1/soccer/players?apikey=987dbfc0-dba2-11ec-9ed1-fb9e7f972bf8&country_id=${countryCode}`);
    const body = await response.json();
    console.log(body);
}

// 987dbfc0-dba2-11ec-9ed1-fb9e7f972bf8
// https://app.sportdataapi.com/api/v1/status
// -H "apikey: 987dbfc0-dba2-11ec-9ed1-fb9e7f972bf8" 

// https://app.sportdataapi.com/api/v1/soccer/players?country_id=48