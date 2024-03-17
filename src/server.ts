import fastify from 'fastify'

const PORT = 3333

const app = fastify()

app.get('/hello', async () => {
  return 'Hello World!'
})

app.get('/pudim', async () => {
  return 'Pudim!'
})

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log('HTTP Server Running at', PORT + '!')
  })
