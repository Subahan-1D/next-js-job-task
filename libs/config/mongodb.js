// getting-started.js
import mongoose from "mongoose";

main().catch((err) => console.log(err));

export async function main() {
    
  await mongoose.connect(
    `mongodb+srv://${process.env.NEXT_PUBLIC_USER}:${process.env.NEXT_PUBLIC_PASS}@cluster0.dhn0m.mongodb.net/subahan`
  );
  console.log("Connet to mongodb .....")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
