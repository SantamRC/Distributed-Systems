const port=8000;
const Primus= require('primus');

const primus=Primus.createServer({
    port: port,
    transport: 'websocket'
})

primus.on('connect', (ws)=>{
    console.log('CONNECT',port);

    ws.on('data',(msg)=>{
        primus.write(msg);
    })
})

