import styled from 'styled-components';
import { CoachStyled } from '../Coach/Coach.styled';

export const CoachListStyled = styled.div`
    order: 2;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 16px;

    @media (min-width: 1024px) {
        order: 3;
    }
`;

export const CoachListHeader = styled(CoachStyled)`
    height: 40px;
    background-color: #dedede;
    border: 2px solid #dedede;
`;