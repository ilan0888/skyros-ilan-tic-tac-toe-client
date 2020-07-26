import {GAME_START} from './consts';

export function gameStart(symbol) {
    return{
        type: GAME_START,
        symbol
    }
}