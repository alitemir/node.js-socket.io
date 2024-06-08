const io = require('socket.io-client');
const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Sunucuya bağlandı.');
    socket.emit('message', 'Merhaba Sunucu!');
});

socket.on('message', (msg) => {
    console.log('Sunucudan mesaj alındı:', msg);
});

socket.on('disconnect', () => {
    console.log('Sunucudan ayrıldı.');
});
