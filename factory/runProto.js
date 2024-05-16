
import { readFile } from 'fs/promises';

function setFieldType(campo) {

    switch (campo.typeField) {

        case 'int':
        case 'bigint':
        case 'bool':
        case 'bolean':
        case 'date':
        case 'time':
        case 'datetime':
        case 'timestamp':
        case 'year':
            return `${campo.nameField} ${campo.typeField} ${campo.isNull ? 'not null': ''}`

        case 'float':
        case 'double':
        case 'decimal':
            return `${campo.nameField} ${campo.typeField}(${campo.sizeField},${campo.floatField}) ${campo.isNull ? 'not null': ''}`

        case 'char':
        case 'varchar':
        case 'binary':
        case 'varbinary':
        case 'bit':
        case 'tinyint':
        case 'smallint':
        case 'mediumint':  
            return `${campo.nameField} ${campo.typeField}(${campo.sizeField}) ${campo.isNull ? 'not null': ''}`

    }
}

export const runProto = async (fileName) => {

    const jsonContent = await readFile(`./protos/${fileName}`, 'utf-8');
    const proto = JSON.parse(jsonContent);

    console.log(proto.name)

    let sentencia = ''

    sentencia = 'create table ' + proto.name + '(id primary key,'

    proto.colums.forEach(function (columna,index) {
        sentencia += setFieldType(columna)
        index === proto.colums.length-1 ? sentencia+=');' : sentencia+=','
    })


    //console.log(sentencia)

    return sentencia

}