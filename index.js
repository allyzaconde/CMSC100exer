const Fastify = require('fastify');

//initialize server using fastify
const server = Fastify({
    logger: true,
    trustProxy: true
});

//access root address - http://localhost/
server.get('/', {

    /**
     * @param {*} req - request parameter sent by client
     */
    handler: async(req) => {
        console.log("?????//")
        return{ success: true }
    }
});

async function start () {
    //get port from env variable
    const port = parseInt(process.env.PORT || '8080');
    const address = '0.0.0.0';

    const addr = await server.listen(port, address);
    console.log(`Listening on ${addr}`);
}

start();