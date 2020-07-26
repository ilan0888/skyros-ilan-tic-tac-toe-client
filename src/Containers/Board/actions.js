import {MADE_MOVE} from './consts';

export function madeMove(move) {
    return{
        type: MADE_MOVE,
        squareId: move.squareId,
        symbol: move.symbol
    }
}