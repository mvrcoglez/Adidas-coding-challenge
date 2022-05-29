import { render } from '@testing-library/react';
import React from 'react';
import Wrapper from './wrapper';

export const renderWithRedux = (children, preloadedState) => {
    return render(<Wrapper preloadedState={preloadedState}>{children}</Wrapper>);
}