import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { SELECTION_KEY } from '../../constants/teamStorageKey';
import { deleteCoach, deletePlayer, reset } from '../../redux/slices/team.slice';
import * as localStorage from '../../utils/localStorage';
import { ActionsRow, SelectionListItem, SelectionStyled } from './Selection.styled';

const Selection = () => {
    const dispatch = useDispatch();
    const team = useSelector((state) => state.team);
    const { coach, goalkeepers, defenders, midfielders, frontliners, count } = team;
    console.log({ coach, goalkeepers, defenders, midfielders, frontliners, count });

    const deletePlayerButton = (item) => <Button onClick={() => dispatch(deletePlayer(item))}>Del</Button>;
    const deleteCoachButton = () => <Button onClick={() => dispatch(deleteCoach())}>Del</Button>;
    const saveTeam = () => {
        localStorage.setItem(SELECTION_KEY, JSON.stringify(team));
    };
    const resetTeam = () => {
        dispatch(reset());
        localStorage.removeItem(SELECTION_KEY);
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
