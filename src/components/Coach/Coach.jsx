import React from 'react';
import { Image } from '../../atoms/Image/Image.styled';
import { CoachStyled } from './Coach.styled';

const Coach = ({ coach }) => {
    const { img, commonName } = coach;

    const src = img ? img : 'assets/Player_avatar.png';

    const onImageError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = 'assets/Player_avatar.png';
    };

    return (
        <CoachStyled>
            <Image src={img} onError={onImageError} height="50px" />
            <span>{commonName}</span>
            <button>+</button>
        </CoachStyled>
    );
};

export default Coach;
