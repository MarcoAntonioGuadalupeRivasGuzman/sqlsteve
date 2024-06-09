import {createPool} from "myslq2/promise";

export const coneccionDb=createPool({
    host:"localhost",
    port: 3306,
    database:"prueba",
    user:"root",
    pasword:"T0n1h4ll4n1472"
})
