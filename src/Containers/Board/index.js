import {connect} from "react-redux";
import Board from "../../Components/Board";
import {getBoardState, getDidGameStarted, getIsGameWon, getMoveNumber} from './selectors';
import {getIsMyTurn} from '../Player/selectors';
import toJS from "../../hoc/toJS";

const mapStateToProps = (state, ownProps) => {
    return {
        boardState: getBoardState(state),
        didStarted: getDidGameStarted(state),
        myTurn: getIsMyTurn(state),
        isGameFinished: getIsGameWon(state),
        moveNumber: getMoveNumber(state)
    }};

export default connect(mapStateToProps, null)(toJS(Board))