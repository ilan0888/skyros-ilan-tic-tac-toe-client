import {createSelector} from 'reselect';

const getReducer = state => state.get('player');

export const getPlayerSymbol = createSelector(
    getReducer,
    reducer => reducer.get('symbol')
);

export const getIsMyTurn = createSelector(
    getReducer,
    reducer => reducer.get('myTurn')
);


