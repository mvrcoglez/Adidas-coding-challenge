import React from 'react';
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Selection from '../Selection';
import { renderWithRedux } from '../../../redux/test-provider/renderWithRedux';
import teamFixture from './Fixtures/teamFixture';

const state = {
    team: teamFixture
}

describe('Selection/Selection', () => {
    it('Shows a selection list without elements', () => {
        renderWithRedux(<Selection />);

        expect(screen.getByRole('heading', {level: 2, name: /Team.*/})).toBeInTheDocument();
        expect(screen.getByRole('heading', {level: 3, name: /Coach.*/})).toBeInTheDocument();
        expect(screen.getByRole('heading', {level: 3, name: /Goalkeepers.*/})).toBeInTheDocument();
        expect(screen.getByRole('heading', {level: 3, name: /Defenders.*/})).toBeInTheDocument();
        expect(screen.getByRole('heading', {level: 3, name: /Midfielders.*/})).toBeInTheDocument();
        expect(screen.getByRole('heading', {level: 3, name: /Frontliners.*/})).toBeInTheDocument();

        expect(screen.getByRole('button', {name: /Save/})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Reset/})).toBeInTheDocument();
    });

    it('Shows an error when saving', async () => {
        renderWithRedux(<Selection />);
        userEvent.click(screen.getByRole('button', {name: /Save/}));
        await waitFor(() => {
            expect(screen.getByText(/Your team does not meet the minimum members.*/));
        });
    });

    it('Shows right counter', async () => {
        renderWithRedux(<Selection />, state);

        expect(screen.getByText(/Team \(13\/16\)/));
    });

    it('Shows a message when saving a valid state', async () => {
        renderWithRedux(<Selection />, state);
        userEvent.click(screen.getByRole('button', {name: /Save/}));
        await waitFor(() => {
            expect(screen.getByText(/Saved!/));
        });
    });

    it('Shows a message when resetting', async () => {
        renderWithRedux(<Selection />, state);
        userEvent.click(screen.getByRole('button', {name: /Reset/}));
        await waitFor(() => {
            expect(screen.getByText(/Reseted!/));
        });
        expect(screen.getByText(/Team \(0\/16\)/));
    });
});