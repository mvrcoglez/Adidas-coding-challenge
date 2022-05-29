import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { deleteCoach, deletePlayer } from '../../redux/slices/team.slice';
import { SelectionListItem, SelectionStyled } from './Selection.styled';

const Selection = () => {
    const dispatch = useDispatch();
    const { coach, goalkeepers, defenders, midfielders, frontliners, count } = useSelector((state) => state.team);
    console.log({ coach, goalkeepers, defenders, midfielders, frontliners, count });

    const deletePlayerButton = (item) => <Button onClick={() => dispatch(deletePlayer(item))}>Del</Button>;
    const deleteCoachButton = () => <Button onClick={() => dispatch(deleteCoach())}>Del</Button>;

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
