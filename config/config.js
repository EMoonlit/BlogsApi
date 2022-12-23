require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'postgres',
  },
};
