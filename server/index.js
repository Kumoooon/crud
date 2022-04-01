const client = require("./connection.js");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.listen(3001, () => {
  console.log("server is running on port 3001");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.connect();

app.get("/users", (req, res) => {
  client.query(`Select * from employees`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

app.get("/users/:id", (req, res) => {
  client.query(
    `Select * from employees where id = ${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
  client.end;
});
app.post("/users/create", (req, res) => {
  console.log(req.body);
  let insertQuery = `insert into public.employees (id, name, title, text)values(${req.body.id},'${req.body.name}','${req.body.title}','${req.body.text}')`;
  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
app.delete("/users/:id", (req, res) => {
  let insertQuery = `delete from employees where id=${req.params.id}`;
  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
app.put("/users/:id", (req, res) => {
  const employee = req.body;
  console.log(employee);
  let updateQuery = `update employees
    set name = '${employee.name}',
    title = '${employee.title}',
    text = '${employee.text}'
    where id = ${employee.id}`;
  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
