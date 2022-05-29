import styled from 'styled-components';

export const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const TeamSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;
