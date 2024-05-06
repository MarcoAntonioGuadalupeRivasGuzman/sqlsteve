const {makeProto}=require('./factory/maker')

console.clear()
console.log('sqlSteve')

const fileName='prueba.json'

//const archivo = require(`./protos/${fileName}`)

//console.log(archivo)

makeProto('prueba')
    .then(nombre=>console.log(nombre, 'creado \n happy hacking!'))
    .catch(err=>console.log(err))


