import styled from 'styled-components';

export const SelectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    order: 1;
    min-width: 200px;
    margin-top: 16px;
`;

export const SelectionListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: square;
    margin: 5px 0;
`;

export const ActionsRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;