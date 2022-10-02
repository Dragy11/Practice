import {createPool} from 'mysql2/promise'
import { 
    DB_PORT,
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} from "./config.js";

//Entorno de produccion
//variables de entorno
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})



// ------------------------------------------
//Local
/*export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'jpas30',
    port: 3306,
    database: 'companydb'
})*/