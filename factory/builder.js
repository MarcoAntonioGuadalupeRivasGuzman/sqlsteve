import file from 'fs'

export function makeDataObject(object){
    
    const ruta = './dataObjects'

    if(!file.existsSync(ruta)){
        file.mkdirSync(ruta)
    }

    let codigo = `class ${object.name} {`

    codigo += '\n\tconstructor('

    object.colums.forEach( function(columna,index) {
        codigo += columna.nameField
        index === object.colums.length-1 ? codigo += ') {\n' : codigo += ','
    });

    object.colums.forEach(function(columna){
        codigo += `\t\tthis.${columna.nameField} = ${columna.nameField}\n`
    })

    codigo += `\t\tthis.sentencia = ""`

    codigo += `\t\tthis.tableName = ${object.name}`

    codigo += '\t}'

    codigo += '\n\tcreateUpdate(){\n\t}\n'

    codigo += '\tselect(){\n\t}\n'

    codigo += '\tdelete(){\n\t}\n'

    codigo += '\n}'

    try{
        file.writeFileSync(`./dataObjects/${object.name}.js`,codigo,'utf8')
        return `${object.name}.js`
    }
    catch(error){
        throw error
    }
}