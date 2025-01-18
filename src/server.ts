import express from 'express';
import db from './config/db';
import colors from 'colors';
import router from './routes/index';

async function connectDB() {
    try {
        console.log(colors.green.bold('Conectando a la base de datos...'));
        await db.authenticate();
        console.log(colors.green.bold('Base de datos autentificada'));
        await db.sync();
        console.log(colors.green.bold('Conexión existosa, base de datos sincronizada'));
    } catch (error) {
        console.log(colors.red.bold('Hubo un error al conectar la bd'));
        console.error(error);
    }
}

connectDB();

const app = express();

app.use(express.json());

app.use('/api', router);

export default app;
