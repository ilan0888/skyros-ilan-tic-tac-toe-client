import {MAKE_MOVE} from './consts';

export function madeMove(move) {
    return{
        type: MAKE_MOVE,
        squareId: move.squareId,
    }
}