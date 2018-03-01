## websocket 事件和方法
### 一、调度4个不同的事件：
> open、message、error、close<br/>
> 可以用on<事件名>监听，也可以用addEventListener()<br/>

> open:协议握手完成<br/>
> message：接收到消息，接收文本，二进制类型，作为Blob或者ArrayBuffer消息处理<br/>
> error：错误<br/>
> close：连接关闭；readyState=2正在关闭；readyState=3已关闭；有3个属性wasClean（是否顺利关闭）、code、reason<br/>

### 二、两个方法
#### 1）send（）：在onopen监听器之后，onclose监听器之前
> 发送方式：<br/>
> 1、<br/>
> var ws = new WebSocket('ws:xxx');<br/>
> ws.onopen = function(e){<br/>
> ws.send('xxxxx')<br/>
> }<br/>

> 2、<br/>
> function myEventHandler(data){<br/>
> if(ws.readyState === WebSocket.OPEN){<br/>
> ws.send(data)<br/>
> }else{<br/>
> //do something<br/>
> }<br/>
> }<br/>

> 发送类型：<br/>
> 1、Blob:主要是多媒体文件、图像、视频、音频<br/>
> var blob = new Blob('xxx')<br/>
> ws.send(blob)<br/>

> 2、ArrayBuffer<br/>
> var a = new Uint8Array([8,9,9,0]);<br/>
> ws.send(a.buffer)<br/>

#### 2）close（）：关闭连接
> ws.close()//两个可选参数code（数字型的状态码）、reason（一个文本字符串）<br/>
> 参数用于向服务器传递客户端关闭原因<br/>
