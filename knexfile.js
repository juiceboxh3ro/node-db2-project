// Update with your config settings.

// this file stores configs about how to connect to the db using Knex

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  }
};
