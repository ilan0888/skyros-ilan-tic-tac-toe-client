import {fromJS} from "immutable";
import {MADE_MOVE} from './consts';
import {GAME_START} from "../Player/consts";
import checkIfGameEnded from '../../helpers/gameWinCheck';

const initialState = fromJS(
        {
            state: {
                r0c0: null,
                r0c1: null,
                r0c2: null,
                r1c0: null,
                r1c1: null,
                r1c2: null,
                r2c0: null,
                r2c1: null,
                r2c2: null
            },
            didStarted: false,
            won: false,
            moveNumber: 1,
        }
    );

export default function BoardReducer(state = initialState, action){
    switch (action.type) {
        case MADE_MOVE:
            let won = false;
            const newState = state.setIn(['state', action.squareId], action.symbol).set('moveNumber', state.get('moveNumber') + 1);
            if(newState.get('moveNumber') > 5) won = checkIfGameEnded(newState.get('state')); // cant win until 5 moves are made
            return newState.set('won', won);
        case GAME_START:
            return state.set('didStarted', true);
        default:
            return state
    }
}