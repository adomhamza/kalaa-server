import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import * as dotenv from "dotenv";
import cors from "cors";
import { main } from "./utils/db/connector";

const app = express();
const port = 300;

app.use(cors({origin: "*"}));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

main()
  .then(() =>
    app.listen(port, () => {
      return console.log(`Express is listening at http://localhost:${port}`);
    })
  )
  .catch((e) => console.error(e));
