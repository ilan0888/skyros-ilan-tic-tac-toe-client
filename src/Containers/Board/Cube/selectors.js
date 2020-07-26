import {createSelector} from 'reselect';

const getReducer = state => state.get('board');

export const getCubeStateById = id => createSelector(
    getReducer,
    reducer => reducer.getIn(['state', id])
);


