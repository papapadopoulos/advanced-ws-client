var ws;
const WSClient = {
  open: url => {
    ws = new WebSocket(url);
    return ws;
  },

  onMessage: fn => {
    ws.onMessage(fn);
  }
};

export default WSClient;
