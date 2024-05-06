const file = require('fs')

const makeProto=async(nombre)=>{

    const body=`{\n "name":"${nombre}",\n "colums":[]\n}`

    try{
        file.writeFileSync(`${nombre}.json`,body)
        return `${nombre}.json`
    }
    catch(error){
        throw error
    }
}

module.exports={
    makeProto
}