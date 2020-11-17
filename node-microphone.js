let fs = require('fs');
let Mic = require('node-microphone');
let mic = new Mic();
let micStream = mic.startRecording();
var file = fs.createWriteStream('test.wav', { encoding: 'binary' })
micStream.pipe( file );
setTimeout(() => {
	console.log('stopped recording');
    mic.stopRecording();
}, 3000);
mic.on('info', (info) => {
	console.log(info);
});
mic.on('error', (error) => {
	console.log(error);
});