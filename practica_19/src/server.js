const express = require('express'); //Inyectamos express
const mongoose = require('mongoose'); //Inyectamos mongoose
const personsRoutes = require('./routes/persons') //Inyectamos el router de personas
require('dotenv').config(); //Inyectamos la variable de ambiente para MONGODB_URL

mongoose.Promise = global.Promise;
const app = express(); //Instaciamos aplicacion de express
const port = process.env.PORT || 3000; //Configurar el puerto de escucha

app.set('view engine', 'ejs'); //Establevemos el valor para el moto de vistas.
app.use(express.urlencoded({extended:false}));
app.use(personsRoutes); //Utilizamos el router de personas

mongoose.connect('mongodb+srv://lchacon0:cerdo123@persons.btenzta.mongodb.net/Persons?retryWrites=true&w=majority') //Conectamos la base de datos
.then(() => console.log(`Conectado a TEST`))
.catch(error => console.error(error));

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
