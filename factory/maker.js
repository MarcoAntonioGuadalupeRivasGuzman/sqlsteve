import file from 'fs'

export function makeProto(nombre){

    const ruta = './protos'

    if(!file.existsSync(ruta)){
        file.mkdirSync(ruta)
    }

    const body=`{\n "name":"${nombre}",\n "colums":[]\n}`

    try{
        file.writeFileSync(`./protos/${nombre}.json`,body)
        return `${nombre}.json`
    }
    catch(error){
        throw error
    }
}