websocket事件及方法：
一、调度4个不同的事件：
open、message、error、close
可以用on<事件名>监听，也可以用addEventListener()

open:协议握手完成
message：接收到消息，接收文本，二进制类型，作为Blob或者ArrayBuffer消息处理
error：错误
close：连接关闭；readyState=2正在关闭；readyState=3已关闭；有3个属性wasClean（是否顺利关闭）、code、reason

二、两个方法
1）send（）：在onopen监听器之后，onclose监听器之前
发送方式：
1、
var ws = new WebSocket('ws:xxx');
ws.onopen = function(e){
ws.send('xxxxx')
}

2、
function myEventHandler(data){
if(ws.readyState === WebSocket.OPEN){
ws.send(data)
}else{
//do something
}
}

发送类型：
1、Blob:主要是多媒体文件、图像、视频、音频
var blob = new Blob('xxx')
ws.send(blob)

2、ArrayBuffer
var a = new Uint8Array([8,9,9,0]);
ws.send(a.buffer)

2）close（）：关闭连接
ws.close()//两个可选参数code（数字型的状态码）、reason（一个文本字符串）
参数用于向服务器传递客户端关闭原因
