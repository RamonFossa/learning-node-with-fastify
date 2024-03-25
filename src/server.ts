import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const PORT = env.PORT

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
