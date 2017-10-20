import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:9000');

const WebSocketMiddleware = () => (next) => {
  socket.on('dispatch', action => next(action));
  return (action) => {
    socket.emit('dispatch', action);
    return next(action);
  };
};

export default WebSocketMiddleware;
