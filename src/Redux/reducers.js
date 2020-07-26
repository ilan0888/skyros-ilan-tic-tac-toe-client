import {combineReducers} from "redux-immutable";
import { connectRouter } from 'connected-react-router/immutable'
import board from "../Containers/Board/reducer";
import player from "../Containers/Player/reducer";


export default (history) => combineReducers({
    board,
    player,
    router: connectRouter(history)
});