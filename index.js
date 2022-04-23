const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5005;
require("dotenv").config();

//mal
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0liqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("josn is running and waitting for ema");
});

app.listen(port, () => {
  console.log("josn is running on the port", port);
});
