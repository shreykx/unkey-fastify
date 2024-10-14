// app.js
import Fastify from 'fastify';
import { configDotenv } from 'dotenv';
import { Ratelimit } from '@unkey/ratelimit';
configDotenv()

const limiter = new Ratelimit({
    namespace: "express-example",
    limit: 2,
    duration: "30s",
    rootKey: process.env.UNKEY_ROOT_KEY
});


const fastify = Fastify({ logger: false });

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});


fastify.get('/secret', async (request, reply) => {
    const identifier = request.ip; // Use IP or any other identifier you want
    console.log(identifier);

    // Check rate limit
    const ratelimit = await limiter.limit(identifier);
    if (!ratelimit.success) {
        console.log(`Blocked ${identifier}.`);
        return reply.status(429).send("Please try again later");
    }

    return reply.status(200).send("ok");
});

// Run the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server listening on http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
