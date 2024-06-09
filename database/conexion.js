import {createPool} from "mysql2/promise";

export const coneccionDb=createPool({
    host: 'localhost',
    port: 3306,
    user: 'tony',
    database:"prueba",
    password: '12345'
})
