import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()

const database = new DatabaseMemory();

server.post('/videos', (req, res) => {
    const {title, description, duration} = req.body

    database.create({
        title,
        description,
        duration,
    })

    return res.status(201).send()
})

server.get('/videos', () => {
    return 'simbora pai'
})

server.put('/videos/:id', () => {
    return 'simbora node.js'
})

server.delete('/videos/:id', () => {
    return 'simbora'
})

server.listen({
    port: 3000
});