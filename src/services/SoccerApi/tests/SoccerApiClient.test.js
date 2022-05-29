import SoccerApiFixtureCoaches from '../Fixtures/SoccerApiFixture.coaches';
import SoccerApiFixturePlayers from '../Fixtures/SoccerApiFixture.players';
import * as SoccerApiClient from '../SoccerApiClient';
import * as SoccerApiService from '../SoccerApiService';

jest.mock('../SoccerApiClient');

describe('SoccerApi/SoccerApiClient', () => {
    it('returns a full player response', () => {
        SoccerApiClient.players.mockResolvedValue(SoccerApiFixturePlayers);

        SoccerApiService.getPlayers(4).then((response) => expect(response).toHaveLength(100));
    });

    it('returns a full coaches response', () => {
        SoccerApiClient.coaches.mockResolvedValue(SoccerApiFixtureCoaches);

        SoccerApiService.getPlayers(4).then((response) => expect(response).toHaveLength(3));
    });

    it('returns an error when retrieveing players', () => {
        const call = SoccerApiClient.players.mockResolvedValue(null);

        SoccerApiService.getPlayers(4).then(() => expect(call).toThrow('No response data'));
    });

    it('returns an error when retrieveing coaches', () => {
        const call = SoccerApiClient.coaches.mockResolvedValue(null);

        SoccerApiService.getPlayers(4).catch(() => expect(call).toThrow('No response data'));
    });
});
