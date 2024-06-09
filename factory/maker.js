import file from 'fs'

export function makeProto(nombre){

    const ruta = './protos'

    if(!file.existsSync(ruta)){
        file.mkdirSync(ruta)
    }

    const body=`{\n "name":"${nombre}",\n "colums":[]\n, "addColums":[]\n}`

    try{
        file.writeFileSync(`./protos/${nombre}.json`,body)
        return `${nombre}.json`
    }
    catch(error){
        throw error
    }
}

export function listProtos(){
    const ruta = './protos'

    const archivos = file.readdirSync(ruta)

    return archivos
}