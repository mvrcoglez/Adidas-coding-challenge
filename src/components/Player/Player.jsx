import React from 'react';
import { Image } from '../../atoms/Image/Image.styled';
import { PlayerStyled } from './Player.styled';
import PositionType from '../../types/Position';
import FootType from '../../types/Foot';

const Player = ({ id, commonName, name, foot, position, img }) => {
    const src = img ? img : 'assets/Player_avatar.png';

    const onImageError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = 'assets/Player_avatar.png';
    };

    return (
        <PlayerStyled>
            <Image src={src} onError={onImageError} height="50px" />
            <span>{commonName}</span>
            <span>{PositionType[position] ?? 'Unknown'}</span>
            <span>{FootType[foot] ?? 'Unknown'}</span>
            <button>+</button>
        </PlayerStyled>
    );
};

export default Player;
