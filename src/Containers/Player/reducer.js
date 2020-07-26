import {fromJS} from "immutable";
import {GAME_START} from './consts';
import {MADE_MOVE} from "../Board/consts";

const initialState = fromJS(
    {
        symbol: null,
        myTurn: false
    }
);

export default function PlayerReducer(state = initialState, action){
    switch (action.type) {
        case GAME_START:
            return state.set('symbol', action.symbol).set('myTurn', action.symbol === 'X');
        case MADE_MOVE:
            return state.set('myTurn', action.symbol !== state.get('symbol'));
        default:
            return state
    }
}