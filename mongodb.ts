import { MongoClient, Db } from "mongodb";

let mongodb: Db;

const connectToDb = (): Promise<Db> => {
  return new Promise<Db>((resolve, reject) => {
    const client: MongoClient = new MongoClient(process.env.MONGODB_URI);
    client.connect((err) => {
      if (err) {
        reject("Have error in connecting to db");
      }
      mongodb = client.db("productlist");
      resolve(mongodb);
      console.log("successfully connecting to db");
    });
  });
};

export const getMongodb = async () => {
  if (!mongodb) {
    mongodb = await connectToDb();
  }
  return mongodb;
};
