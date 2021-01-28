import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = () => {
  const password = process.env.MONGO_SERVER_PASSWORD;
  const db_name = process.env.MONGO_DB_NAME;

  return mongoose
    .connect(`mongodb+srv://jlory:${password}@cluster0.nbyvu.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch((error) => console.log(error));
};

export default connect;
