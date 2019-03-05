import mongodb from 'mongodb';
import config from 'config/config';

const { MongoClient } = mongodb;
let db;

const mongoConnect = cb => {
  const client = new MongoClient(config.dbURL, { useNewUrlParser: true });
  client.connect(err => {
    if (err !== null) { throw Error(`error connecting to database ${err}`); }
    console.log('Connected!');
    db = client.db(config.dbName);
    client.close();
    cb();
  });
};

const getDb = () => {
  if (db) {
    return db;
  }
  return new Error('No database');
};

export { mongoConnect, getDb };
