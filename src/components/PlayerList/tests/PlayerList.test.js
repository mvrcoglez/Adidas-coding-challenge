import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import PlayerList from '../PlayerList';
import * as SoccerClient from '../../../services/SoccerApi/SoccerApiClient';
import SoccerApiFixturePlayers from '../../../services/SoccerApi/Fixtures/SoccerApiFixture.players';
import { renderWithRedux } from '../../../redux/test-provider/renderWithRedux';

jest.mock('../../../services/SoccerApi/SoccerApiClient');

describe('PlayerList/PlayerList', () => {
    it('will show a list of players', async () => {
        SoccerClient.players.mockResolvedValue(SoccerApiFixturePlayers);
        renderWithRedux(<PlayerList />);
        await waitFor(() => {
            expect(screen.getAllByTestId('player')).toHaveLength(100);
        });
    });
});
