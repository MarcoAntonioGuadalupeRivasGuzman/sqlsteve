import inquirer from 'inquirer'


export async function menu(){
    const opt = await inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: 'Seleciona una opcion: ',
            choices: ['1.Crear proto', '2.lista protos', '3.salir']
        }
    ])

    return opt

} 

