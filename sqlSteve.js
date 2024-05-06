const {makeProto}=require('./factory/maker')

console.clear()
console.log('sqlSteve')

makeProto('prueba')
    .then(nombre=>console.log(nombre, 'creado \n happy hacking!'))
    .catch(err=>console.log(err))


