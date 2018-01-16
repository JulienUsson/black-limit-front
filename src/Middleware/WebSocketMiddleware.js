import openSocket from 'socket.io-client'

const socket = openSocket(process.env.REACT_APP_SOCKET_URL)

const WebSocketMiddleware = () => next => {
  socket.on('dispatch', action => next(action))
  return action => {
    socket.emit('dispatch', action)
    return next(action)
  }
}

export default WebSocketMiddleware
