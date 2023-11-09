import mysql from "mysql2/promise";
async function main() {
    // create the connection
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', password: "", database: 'myblogdb' });
    // query database
    const [rows, fields] = await connection.execute('SELECT * FROM informationlist');
    console.log(rows);
    // console.log(fields);
}
main();