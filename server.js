import path from 'path';
import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import unitOfMeasureRoutes from './routes/unitOfMeasureRoutes.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// routes
app.use('/api/unitOfMeasure', unitOfMeasureRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
