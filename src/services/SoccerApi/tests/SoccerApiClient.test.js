import React from 'react';
import * as SoccerApiService from '../SoccerApiService';
import SoccerApiFixture from '../SoccerApiFixture';

jest.mock('../SoccerApiService');

describe('SoccerApi/SoccerApiClient', () => {
    it('returns a full response', () => {
        SoccerApiService.getPlayers.mockResolvedValue(SoccerApiFixture);

        SoccerApiService.getPlayers(4).then((response) => expect(response).toEqual(SoccerApiFixture));
    });
});
