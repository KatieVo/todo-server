import { getDb } from 'util/db';

export default class Todo {
  constructor(title, status) {
    this.title = title;
    this.status = status;
  }

  save() {
    const db = getDb();
    db.collection('todos').insertOne(this);
  }
}
