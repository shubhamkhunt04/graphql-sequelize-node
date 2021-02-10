require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "12345678",
    database: "blog_app_db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "blog_app_db",
    host: "127.0.0.1",
    dialect: "postgres",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "root",
    password: null,
    database: "blog_app_db",
    host: "127.0.0.1",
    dialect: "postgres",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
