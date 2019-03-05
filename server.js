import express from 'express';
import cors from 'cors';
import config from 'config/config';
import bodyParser from 'body-parser';
import { mongoConnect } from 'util/db';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  res.json({ data: 'Hello World' });
});

mongoConnect(() => {
  app.listen(config.PORT, () => {
    console.log(`server is running on port ${config.PORT}`);
  });
});
