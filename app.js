import express from 'express';

const mongoose = require('mongoose');
const url = 'mongodb://localhost/UserDB';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;


mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {
  console.log('connected...');
});

app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', usersRoutes);


const bookRouter = require('./routes/books');
app.use('/books', bookRouter);


app.listen(PORT, () => {
  console.log(`server started on port:http://localhost:${PORT}`);
});
