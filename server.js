const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Yeni bir kullanıcı bağlandı.');

    socket.on('message', (msg) => {
        console.log('Mesaj alındı:', msg);
        socket.emit('message', `Server: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('Kullanıcı ayrıldı.');
    });
});

server.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor.');
});
