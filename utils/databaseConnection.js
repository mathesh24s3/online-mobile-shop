const mysql = require("mysql");

function userdbConnection() {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mathesh@24s3",
    database: "userdb",
  });
  return con;
}

function mobiledbConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mathesh@24s3",
    database: "mobiledb",
  });
  return connection;
}

function cartdbConnection() {
  const cart = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mathesh@24s3",
    database: "cart",
  });
  return cart;
}

module.exports = {
  userdbConnection: userdbConnection,
  mobiledbConnection: mobiledbConnection,
  cartdbConnection: cartdbConnection,
};
