module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "node_mysql",
  PORT: "8889",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
