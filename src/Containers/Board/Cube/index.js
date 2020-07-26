import {connect} from "react-redux";
import Cube from "../../../Components/Board/Cube";
import {getCubeStateById} from './selectors';
import toJS from "../../../hoc/toJS";
import {getPlayerSymbol, getIsMyTurn} from "../../Player/selectors";
import {getIsGameWon, getMoveNumber} from "../selectors";

const mapStateToProps = (state, {id}) => {
    return {
        content: getCubeStateById(id)(state),
        symbol: getPlayerSymbol(state),
        isMyTurn: getIsMyTurn(state),
        isFinished: getIsGameWon(state),
        moveNumber: getMoveNumber(state)
    }};


export default connect(mapStateToProps, null)(toJS(Cube))