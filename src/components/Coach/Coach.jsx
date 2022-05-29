import React from 'react';
import { useDispatch } from 'react-redux';
import { Image } from '../../atoms/Image/Image.styled';
import { CoachStyled } from './Coach.styled';
import { addCoach } from '../../redux/slices/team.slice';
import Button from '../../atoms/Button/Button';

const Coach = ({ coach }) => {
    const dispatch = useDispatch();
    const { img, commonName } = coach;

    const src = img ? img : 'assets/Player_avatar.png';

    const onImageError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = 'assets/Player_avatar.png';
    };

    return (
        <CoachStyled data-testid="coach">
            <Image src={img} onError={onImageError} height="50px" />
            <span>{commonName}</span>
            <Button onClick={() => dispatch(addCoach(coach))}>Add</Button>
        </CoachStyled>
    );
};

export default Coach;
