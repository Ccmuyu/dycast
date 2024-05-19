// websocketPlugin.js
export default {
  install: (app, options) => {
    let socket = null;
    let isConnected = false;
    const url = options.url;

    const createWebSocket = () => {
      socket = new WebSocket(url);

      socket.onopen = () => {
        console.log('WebSocket connected');
        isConnected = true;
      };

      socket.onclose = () => {
        console.log('WebSocket disconnected');
        isConnected = false;
        // 尝试重新连接
        setTimeout(createWebSocket, 3000); // 3秒后尝试重新连接
      };

      socket.onmessage = (event) => {
        console.log('Received message: ', event.data);
        // 处理接收到的消息
      };
    };

    createWebSocket();

    // 将WebSocket实例和连接状态添加到Vue实例中
    // app.config.globalProperties.$socket = socket;
    // app.config.globalProperties.$isConnected = isConnected;
  }
};
