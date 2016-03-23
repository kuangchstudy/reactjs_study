/**
 * Created by Thinkpad on 2016/3/23.
 */

var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('newListener',function(listener){
    console.log('add new listener : '+ listener.toString());
});

eventEmitter.on('removeListener',function(listener){
    console.log('remove listener : '+ listener.toString());
});

eventEmitter.on('connection',function(){
    console.log("connection success.");
    eventEmitter.emit('data_received');
});

eventEmitter.on('data_received',function(){
    console.log("data receive success.");
});

eventEmitter.removeAllListeners('data_received');

eventEmitter.emit('connection');
console.log("progress execute completed");
