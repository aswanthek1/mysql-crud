import mysql from "mysql";

export const db = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  password: "aswanthek6488",
  database: "test",
});

export const connectDb = db.getConnection((err) => {
  if (err) return console.log("ERROR FOUND WHILE CONNECTION ");
  return console.log("Connected successfully");
});
