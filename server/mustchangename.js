import Koa from "koa";
import mysql from "mysql2/promise";
import KoaRouter from "koa-router";
import cors from "@koa/cors";


const app = new Koa();
const router = new KoaRouter();

app.use(cors());

const connectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myblogdb',
};

router.get('/api/posts', async (ctx) => {
    try {
        const connection = await mysql.createConnection(connectionConfig);
        const [rows] = await connection.execute('SELECT * FROM informationlist');
        ctx.body = rows;
    } catch (error) {
        console.log('sadfsadf');
        console.error('Error fetching posts:', error.message);
        ctx.status = 500;
        ctx.body = { error: 'Internal Server Error' };
    }
});

app.use(router.routes);
app.use(router.allowedMethods);

const port = 8000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

