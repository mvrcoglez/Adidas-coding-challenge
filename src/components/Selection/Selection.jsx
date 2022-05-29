import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { deleteCoach, deletePlayer } from '../../redux/slices/team.slice';
import { SelectionListItem, SelectionStyled } from './Selection.styled';

const Selection = () => {
    const dispatch = useDispatch();
    const { coach, goalkeepers, defenders, midfielders, frontliners, count } = useSelector((state) => state.team);
    console.log({ coach, goalkeepers, defenders, midfielders, frontliners, count });
    return (
        <SelectionStyled>
            <h2>Team ({count}/16)</h2>
            <div>
                <div>
                    <h3>Coach ({coach ? 1 : 0}/1)</h3>
                    <ul>
                        {coach && (
                            <SelectionListItem>
                                {coach.commonName} <Button onClick={() => dispatch(deleteCoach())}>x</Button>
                            </SelectionListItem>
                        )}
                    </ul>
                </div>
                <div>
                    <h3>Goalkeepers ({goalkeepers.length}/2)</h3>
                    <ul>
                        {goalkeepers &&
                            goalkeepers.map((item, key) => {
                                return (
                                    <SelectionListItem key={key}>
                                        {item.commonName}
                                        <Button onClick={() => dispatch(deletePlayer(item))}>x</Button>
                                    </SelectionListItem>
                                );
                            })}
                    </ul>
                </div>
                <div>
                    <h3>Defenders ({defenders.length}/4)</h3>
                    <ul>
                        {defenders &&
                            defenders.map((item, key) => {
                                return (
                                    <SelectionListItem key={key}>
                                        {item.commonName}
                                        <Button onClick={() => dispatch(deletePlayer(item))}>x</Button>
                                    </SelectionListItem>
                                );
                            })}
                    </ul>
                </div>
                <div>
                    <h3>Midfielders ({midfielders.length}/4)</h3>
                    <ul>
                        {midfielders &&
                            midfielders.map((item, key) => {
                                return (
                                    <SelectionListItem key={key}>
                                        {item.commonName}
                                        <Button onClick={() => dispatch(deletePlayer(item))}>x</Button>
                                    </SelectionListItem>
                                );
                            })}
                    </ul>
                </div>
                <div>
                    <h3>Frontliners ({frontliners.length}/2)</h3>
                    <ul>
                        {frontliners &&
                            frontliners.map((item, key) => {
                                return (
                                    <SelectionListItem key={key}>
                                        {item.commonName}
                                        <Button onClick={() => dispatch(deletePlayer(item))}>x</Button>
                                    </SelectionListItem>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </SelectionStyled>
    );
};

export default Selection;
