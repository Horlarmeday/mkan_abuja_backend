import '../config/env';
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import rateLimit from 'express-rate-limit';

import error from '../middleware/error';
import userRoutes from '../modules/User/userRoutes';
import fileRoutes from '../modules/File/fileRoutes';
import './logger';

const server = express();
server.disable('x-powered-by');
const apiTimeout = 18000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 700,
  message: 'Too many request, please try again after 10 minutes',
  headers: true,
});

const corsOptions = {
  credentials: true,
  origin: [],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.use(cors(corsOptions));
server.use(helmet());
server.use(limiter);
server.use(morgan('dev'));
server.use(express.json({ limit: '5mb' }));
server.use(express.static('download'));
server.use(
  fileUpload({
    limits: { fileSize: 7 * 1024 * 1024 },
  })
);
server.use(express.static(path.join(__dirname, '../public')));
server.use('/api/users', userRoutes);
server.use('/api/files', fileRoutes);

server.use((req, res, next) => {
  // set the timeout for all HTTP requests
  req.setTimeout(apiTimeout, () => {
    const err = new Error('Request Timeout');
    err.status = 408;
    next(err);
  });

  // set the server response timeout for all HTTP requests
  res.setTimeout(apiTimeout, () => {
    const err = new Error('Service Unavailable');
    err.status = 503;
    next(err);
  });
  next();
});

server.get(/.*/, (req, res) => res.sendFile(`${__dirname}../public/index.html`));

server.use(error);

server.use((req, res, next) => {
  const err = res.status(404).json('Resource does not exist');
  next(err);
});

export default server;
