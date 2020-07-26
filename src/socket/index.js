import config from '../config/config';
import SocketHandler from "../socket/SocketHandler";
let socketHandler = new SocketHandler(config.server, 'connect to game');
export default socketHandler

