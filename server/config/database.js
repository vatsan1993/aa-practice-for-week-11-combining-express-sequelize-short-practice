module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: 'sqlite',
    seederStorage: 'squelize',
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    //logging : false
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
