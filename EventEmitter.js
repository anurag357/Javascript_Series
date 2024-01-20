const EventEmitter = require('events')
const myEmitter = new EventEmitter()
myEmitter.on('greet', (name)=>{
    console.log(`Event listener one ${name}`)
});
myEmitter.on('greet', (name)=>{
    console.log(` Event listener two ${name}`)
    
})

myEmitter.once('greet', (name)=>{
    console.log(` Event listner once ${name}`)
})
myEmitter.emit('greet', 'Jai Clark')
myEmitter.emit('greet', 'John')

const fs = require('fs')
fs.readFile('example.txt', 'utfo8', (err, data) => {
    if(err){
        console.log('getting erroe in file', err)
        return
    }
    console.log('Readfile example.text', data);
})

const path = require('path')
const filePath = path.join(__dirname, 'files', 'example.txt');
console.log(filePath);