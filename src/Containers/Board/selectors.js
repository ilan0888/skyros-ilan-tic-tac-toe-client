import {createSelector} from 'reselect';

const getReducer = state => state.get('board');

export const getBoardState = createSelector(
    getReducer,
    reducer => reducer.get('state')
);

export const getDidGameStarted = createSelector(
    getReducer,
    reducer => reducer.get('didStarted')
);

export const getIsGameWon = createSelector(
    getReducer,
    reducer => reducer.get('won')
);

export const getMoveNumber = createSelector(
    getReducer,
    reducer => reducer.get('moveNumber')
)


