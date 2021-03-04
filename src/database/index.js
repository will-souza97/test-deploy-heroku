import mongoose from 'mongoose';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.mongoConnection = mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.eaqd4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    );
  }
}

export default new Database();
