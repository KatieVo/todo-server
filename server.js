import express from 'express';
import config from 'config/config';
import bodyParser from 'body-parser';
import mongoConnect from 'util/db';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

mongoConnect(db => {
  app.listen(config.PORT, () => {
    console.log(`server is running on port ${config.PORT}`);
  });
});
