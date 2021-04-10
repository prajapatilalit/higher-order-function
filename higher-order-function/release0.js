function sendMessage(message, fn){
    return fn(message);
}
sendMessage("Hello world!!", console.log);