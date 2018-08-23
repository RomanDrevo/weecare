const jsonServer = require('json-server')
const server = jsonServer.create()
// const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', jsonServer.router('db.json'));



server.listen(3001, () => {
    console.log('JSON Server is running')
})

