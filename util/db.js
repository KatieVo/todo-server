import mongodb from 'mongodb';
import config from 'config/config';

const { MongoClient } = mongodb;

const mongoConnect = cb => {
  const client = new MongoClient(config.dbURL);
  MongoClient.connect(err => {
    if (err !== null) { throw Error('error connecting to database'); }
    console.log('Connected!');
    const db = client.db(config.dbName);
    client.close();
    cb(db);
  });
};

export default mongoConnect;
