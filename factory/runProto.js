
import { readFile } from 'fs/promises';

export const  runProto=async(fileName)=>{

    const jsonContent = await readFile(`./protos/${fileName}`, 'utf-8');
    const proto = JSON.parse(jsonContent);

    console.log(proto.name)

    let sentencia = ''

    sentencia='create table '+proto.name+'(id primary key,'

    proto.colums.forEach(function(columna){
        sentencia+=columna.nameField+' '+columna.typeField+' '
    })


    console.log(sentencia)

    return sentencia

}