import { createSlice } from '@reduxjs/toolkit'
import Position from '../../types/Position';

const initialState = {
  coach: null,
  goalkeepers : [],
  defenders: [],
  midfielders: [],
  frontliners: [],
  count: 0,
};

const playerAlreadySet = (list, newPlayer) => {
    return list.reduce((acc, item) => {return acc || newPlayer.id === item.id}, false);
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        addCoach: (state, action) => {
            if (state.coach !== null) return;
            state.coach = action.payload;
            state.count += 1;
        },
        deleteCoach: (state) => {
            if (state.coach === null) return;
            state.coach = null;
            state.count -= 1;
        },
        addPlayer: (state, action) => {
            const newPlayer = action.payload;
            switch(newPlayer.position) {
                case Position.Goalkeeper:
                    if(state.goalkeepers && playerAlreadySet(state.goalkeepers, newPlayer)) {
                        break;
                    }
                    state.goalkeepers.push(newPlayer);
                    state.count += 1;
                    break;
                case Position.Defender:
                    if(state.defenders && playerAlreadySet(state.defenders, newPlayer)) {
                        break;
                    }
                    state.defenders.push(newPlayer);
                    state.count += 1;
                    break;
                case Position.Midfielder:
                    if(state.midfielders && playerAlreadySet(state.midfielders, newPlayer)) {
                        break;
                    }
                    state.midfielders.push(newPlayer);
                    state.count += 1;
                break;
                case Position.Frontliner:
                    if(state.frontliners && playerAlreadySet(state.frontliners, newPlayer)) {
                        break;
                    }
                    state.frontliners.push(newPlayer);
                    state.count += 1;
                    break;
                default: 
                    console.log('error');
            }
        },
        deletePlayer: (state, action) => {
            const newPlayer = action.payload;
            switch(newPlayer.position) {
                case Position.Goalkeeper:
                    const { goalkeepers } = state;
                    
                    state.goalkeepers = goalkeepers.filter((goalkeeper) => {
                        return goalkeeper.id !== newPlayer.id;
                    });
                    state.count -= 1;
                    break;
                case Position.Defender:
                    const { defenders } = state;

                    state.defenders = defenders.filter((defender) => {
                        return defender.id !== newPlayer.id;
                    });
                    state.count -= 1;
                    break;
                case Position.Midfielder:
                    const { midfielders } = state;

                    state.midfielders = midfielders.filter((midfielder) => {
                        return midfielder.id !== newPlayer.id;
                    });
                    state.count -= 1;
                    break;
                case Position.Frontliner:
                    const { frontliners } = state;

                    state.frontliners = frontliners.filter((frontliner) => {
                        return frontliner.id !== newPlayer.id;
                    });
                    state.count -= 1;
                    break;
                default: 
                    console.log('error')
            }

        }
    },
});

export const { addCoach, deleteCoach, addPlayer, deletePlayer } = teamSlice.actions;

export default teamSlice.reducer;