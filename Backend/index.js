import express from 'express';
// import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
import 'dotenv/config'

const PORT =  process.env.PORT
const app = express();

// app.listen(PORT, () => {
//   console.log(`App is listening to port: ${PORT}`);
//   console.log(`Click here http://localhost:${PORT}/ `);
// });

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
  console.log(`Click here http://localhost:${PORT}/ `);
});

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('App connected to database');
  })
  .catch((error) => {
    console.log(error);
  });
