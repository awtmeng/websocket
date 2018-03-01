WebSocket对象特性
1、readyState
WebSocket.CONNECTING   0  连接正在进行中，但还未建立
WebSocket.OPEN                   1  连接已经建立
WebSocket.CLOSING            2  正在进行关闭握手
WebSocket.CLOSED              3 连接已经关闭

2、bufferedAmount  检测已经进入队列，但是尚未发送到服务器的字节数,限制应用向服务器发送数据的速率，从而避免网络饱和

3、protocol 在最初握手完成之前为空，如果服务器没有选择客户端提供的某个协议，该值保持空