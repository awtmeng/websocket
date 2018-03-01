// 10k max buffer size
var THRESHOLD = 10240;

// create a New WebSocket connection
var ws = new WebSocket('ws://xxxxx')

//listen for the opening event
ws.onopen = function(){
    setInterval(function(){
        //Send only if the buffer is not full
        if(ws.bufferedAmount < THRESHOLD){
            ws.send(getApplicationState())
        }
    }, 1000)
}