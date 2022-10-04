import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import * as dotenv from "dotenv";
import cors from "cors";
import { main } from "./utils/db/connector";
import { userRouter } from "./routes/userRoute";

const app = express();
const port = 5050;

app.use(cors({ origin: "*" }));

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  "/user",
  userRouter
);

/** Error handling */
app.use((req, res, next) => {
  const error = new Error("not found");
  return res.status(404).json({
    message: error.message,
  });
});

main()
  .then(() =>
    app.listen(port, () => {
      return console.log(`Express is listening at http://localhost:${port}`);
    })
  )
  .catch((e) => console.error(e));
