import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import CoachList from '../CoachList';
import * as SoccerClient from '../../../services/SoccerApi/SoccerApiClient';
import SoccerApiFixtureCoaches from '../../../services/SoccerApi/Fixtures/SoccerApiFixture.coaches';
import { renderWithRedux } from '../../../redux/test-provider/renderWithRedux';

jest.mock('../../../services/SoccerApi/SoccerApiClient');

describe('CoachList/CoachList', () => { 
    it('will show a list of coaches', async () => {
        SoccerClient.coaches.mockResolvedValue(SoccerApiFixtureCoaches);
        renderWithRedux(<CoachList />);
        await waitFor(() => {
            expect(screen.getAllByTestId('coach')).toHaveLength(3);
        })
        
    })
});