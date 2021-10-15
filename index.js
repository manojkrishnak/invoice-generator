const fastify = require("fastify")({logger: true});
const path = require('path');
const PORT = 5678;



fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})

fastify.register(require("./routes/index"));




fastify.listen(PORT, function(err, address){
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server is running on ${address}`);
})