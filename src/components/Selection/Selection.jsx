import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { SELECTION_KEY } from '../../constants/teamStorageKey';
import { deleteCoach, deletePlayer, reset } from '../../redux/slices/team.slice';
import * as localStorage from '../../utils/localStorage';
import { ActionsRow, CloseNotification, SelectionListItem, SelectionStyled } from './Selection.styled';

const TEAM_CONDITIONS = {
    coach: 1,
    goalkeepers: 2,
    defenders: 4,
    midfielders: 4,
    frontliners: 2,
    maxMembers: 16,
};

const Selection = () => {
    const [notification, setNotification] = useState({
        saved: false,
        reseted: false,
        teamConditions: false,
    });
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team);
    const { coach, goalkeepers, defenders, midfielders, frontliners, count } = team;

    const deletePlayerButton = (item) => <Button onClick={() => dispatch(deletePlayer(item))}>Del</Button>;
    const deleteCoachButton = () => <Button onClick={() => dispatch(deleteCoach())}>Del</Button>;
    const saveTeam = () => {
        if (
            team.coach === null ||
            team.goalkeepers < TEAM_CONDITIONS.goalkeepers ||
            team.defenders < TEAM_CONDITIONS.defenders ||
            team.midfielders < TEAM_CONDITIONS.midfielders ||
            team.frontlines < TEAM_CONDITIONS.frontliners ||
            team.count >= TEAM_CONDITIONS.maxMembers
        ) {
            setNotification({
                teamConditions: true,
            });
            return;
        }
        localStorage.setItem(SELECTION_KEY, JSON.stringify(team));
        setNotification({
            saved: true,
            reseted: false,
        });
    };
    const resetTeam = () => {
        dispatch(reset());
        localStorage.removeItem(SELECTION_KEY);
        setNotification({
            saved: false,
            reseted: true,
        });
    };

    const renderPlayerList = (playerList) => {
        return (
            <ul>
                {playerList &&
                    playerList.map((item, key) => {
                        return (
                            <SelectionListItem key={key}>
                                {item.commonName}
                                {deletePlayerButton(item)}
                            </SelectionListItem>
                        );
                    })}
            </ul>
        );
    };

    return (
        <SelectionStyled>
            <h2>Team ({count}/16)</h2>
            <ActionsRow>
                <Button onClick={saveTeam}>Save</Button>
                <Button onClick={resetTeam}>Reset</Button>
            </ActionsRow>
            <div>
                {notification.saved && (
                    <p>
                        Saved!{' '}
                        <CloseNotification onClick={() => setNotification({ saved: false })}>x</CloseNotification>
                    </p>
                )}
                {notification.reseted && (
                    <p>
                        Reseted!{' '}
                        <CloseNotification onClick={() => setNotification({ reseted: false })}>x</CloseNotification>
                    </p>
                )}
            </div>
            <div>
                {notification.teamConditions && (
                    <p>
                        Your team does not meet the minimum members{' '}
                        <CloseNotification onClick={() => setNotification({ teamConditions: false })}>
                            x
                        </CloseNotification>
                    </p>
                )}
            </div>

            <div>
                <div>
                    <h3>Coach ({coach ? 1 : 0}/1)</h3>
                    <ul>
                        {coach && (
                            <SelectionListItem>
                                {coach.commonName} {deleteCoachButton()}
                            </SelectionListItem>
                        )}
                    </ul>
                </div>
                <div>
                    <h3>Goalkeepers ({goalkeepers.length}/2)</h3>
                    {renderPlayerList(goalkeepers)}
                </div>
                <div>
                    <h3>Defenders ({defenders.length}/4)</h3>
                    {renderPlayerList(defenders)}
                </div>
                <div>
                    <h3>Midfielders ({midfielders.length}/4)</h3>
                    {renderPlayerList(midfielders)}
                </div>
                <div>
                    <h3>Frontliners ({frontliners.length}/2)</h3>
                    {renderPlayerList(frontliners)}
                </div>
            </div>
        </SelectionStyled>
    );
};

export default Selection;
