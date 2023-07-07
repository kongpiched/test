const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config().parsed;
const { executeSQL } = require("./services/callMySql");
const app = express();

app.get("/test", (req, res) => {
  res.json("Hello World");
});

app.get("/api", async (req, res) => {
  let sql = "select * from city limit 5";
  let rsl = await executeSQL(sql);
  res.json(rsl);
});

app.get("/city/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  let sql = `SELECT * FROM city where ID = ${id}`;
  try {
    let result = await executeSQL(sql);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(process.env.PORT_API, () => {
  console.log(`Server start on port : ${process.env.PORT_API}`);
});
