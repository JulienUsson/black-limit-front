import openSocket from 'socket.io-client';

import config from '../config';

const socket = openSocket(config.socket);

const WebSocketMiddleware = () => (next) => {
  socket.on('dispatch', action => next(action));
  return (action) => {
    socket.emit('dispatch', action);
    return next(action);
  };
};

export default WebSocketMiddleware;
