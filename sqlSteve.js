const {makeProto}=require('./factory/maker')
const argv = require('yargs').argv;

console.clear()
console.log('sqlSteve')

const fileName=argv.proto

const archivo = require(`./protos/${fileName}`)

console.log(archivo)

makeProto('prueba')
    .then(nombre=>console.log(nombre, 'creado \n happy hacking!'))
    .catch(err=>console.log(err))


