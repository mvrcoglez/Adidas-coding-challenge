

import { configureStore } from '@reduxjs/toolkit';
import TeamReducer from '../slices/team.slice';
import { Provider } from 'react-redux';

const createReduxStore = (preloadedState) => {
    return configureStore({
        reducer: {
            team: TeamReducer
        },
        preloadedState,
    })
}


const Wrapper = ({ children, preloadedState }) => {
    const store = createReduxStore(preloadedState);
	return <Provider store={store}>{children}</Provider>
};

export default Wrapper;

