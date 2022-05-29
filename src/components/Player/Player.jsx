import React from 'react';
import { useDispatch } from 'react-redux';
import { Image } from '../../atoms/Image/Image.styled';
import { PlayerStyled } from './Player.styled';
import PositionType from '../../types/Position';
import FootType from '../../types/Foot';
import { addPlayer } from '../../redux/slices/team.slice';
import Position from '../../types/Position';
import Button from '../../atoms/Button/Button';

const Player = ({ player }) => {
    const dispatch = useDispatch();
    const src = player.img ? player.img : 'assets/Player_avatar.png';

    const onImageError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = 'assets/Player_avatar.png';
    };

    const renderPosition = (position) => {
        switch (position) {
            case Position.Goalkeeper:
                return 'Goalkeeper';
            case Position.Defender:
                return 'Defender';
            case Position.Midfielder:
                return 'Midfielder';
            case Position.Frontliner:
                return 'Frontliner';
            default:
                return 'Unknown';
        }
    };

    return (
        <PlayerStyled data-testid="player">
            <Image src={src} onError={onImageError} height="50px" />
            <span>{player.commonName}</span>
            <span>{renderPosition(player.position)}</span>
            <span>{FootType[player.foot] ?? 'Unknown'}</span>
            <Button onClick={() => dispatch(addPlayer(player))}>Add</Button>
        </PlayerStyled>
    );
};

export default Player;
