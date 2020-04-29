// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations :{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, // sqlite não suporta valores padrão
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations :{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true, // sqlite não suporta valores padrão
  },
// voltado para time de desenvolvimento, simulando o de production para testes
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
// voltado para o usuário final utilizar sua aplicacao
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
