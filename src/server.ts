import fastify from 'fastify'
import { knex } from './database'

const PORT = 3333

const app = fastify()

app.get('/testdb', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log('HTTP Server Running at', PORT + '!')
  })
