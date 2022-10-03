import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const host = process.env.MONGO_DATABASE_HOST.toString();
console.log("Url: ", host)

main().catch(err => console.log(err));

export async function main() {
  await mongoose.connect(host);
}
