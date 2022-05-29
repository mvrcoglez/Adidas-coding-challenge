import React from 'react';
import SoccerApiFixtureCoaches from '../Fixtures/SoccerApiFixture.coaches';
import SoccerApiFixturePlayers from '../Fixtures/SoccerApiFixture.players';
import * as SoccerApiService from '../SoccerApiService';

jest.mock('../SoccerApiService');

describe('SoccerApi/SoccerApiClient', () => {
    it('returns a full player response', () => {
        SoccerApiService.getPlayers.mockResolvedValue(SoccerApiFixturePlayers);

        SoccerApiService.getPlayers(4).then((response) => expect(response).toEqual(SoccerApiFixturePlayers));
    });

    it('returns a full coaches response', () => {
        SoccerApiService.getPlayers.mockResolvedValue(SoccerApiFixtureCoaches);

        SoccerApiService.getPlayers(4).then((response) => expect(response).toEqual(null));
    });
});
