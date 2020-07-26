import io from "socket.io-client";
import store from "../Redux/store";

export default class SocketHandler {
    constructor(url, data){
        this.socket = io.connect(url, {query: data});
        this.socket.on('close', () => this.closeSocket());
    }

    addDispatchListener(actionToTake, actionToDispatch){
        this.socket.on(actionToTake, (data) => store.dispatch(actionToDispatch(data)));
    }

    send(action, data){
        this.socket.emit(action, data);
    }

    closeSocket(){
        this.socket.close();
    }
}