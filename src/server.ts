import fastify from 'fastify'
import { knex } from './database'

const PORT = 3333

const app = fastify()

app.get('/testdb', async () => {
  const transaction = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return transaction
})

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log('HTTP Server Running at', PORT + '!')
  })
