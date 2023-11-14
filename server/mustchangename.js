import Koa from "koa";
import mysql from "mysql2/promise";
import KoaRouter from "koa-router";


const app = new Koa();
const router = new KoaRouter();
const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: "", database: 'myblogdb' });

router.post("/", async (ctx, next) => {

    const [rows, fields] = await connection.execute('SELECT * FROM informationlist');
    console.log(rows);
})

app.use(router.routes(), router.allowedMethods());

app.listen(3000);
// async function main() {
//     // create the connection
//     const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: "", database: 'myblogdb' });
//     // query database
//     const [rows, fields] = await connection.execute('SELECT * FROM informationlist');
//     console.log(rows);
//     // console.log(fields);
// }
// main();