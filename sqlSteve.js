/*const {makeProto}=require('./factory/maker')
const argv = require('yargs').argv;*/

import { makeProto } from "./factory/maker.js"
import { menu } from "./helper/menu.js"
import inquirer from 'inquirer'

console.clear()
console.log('sqlSteve')

/*const fileName=argv.proto

const archivo = require(`./protos/${fileName}`)

console.log(archivo)

makeProto('prueba')
    .then(nombre=>console.log(nombre, 'creado \n happy hacking!'))
    .catch(err=>console.log(err))*/


const opcion = await inquirer.prompt([
    {
        type: 'list',
        name: 'valor',
        message: 'Seleciona una opcion: 1.Crear proto 2.lista protos 3.salir ',
        choices: [1, 2, 3]
    }
])

//console.log(opcion.valor)

switch (opcion.valor) {
    case 1:
        const nombre = await inquirer.prompt([
            {
                type: 'input',
                name: 'valor',
                message: 'Ingresa el nombre: ',
            }
        ])

        console.log(makeProto(nombre.valor), 'creado \n happy hacking!')
        break
}
