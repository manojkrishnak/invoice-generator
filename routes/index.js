function invoiceRoutes(fastify, options, done){
    fastify.get("/", function(req, reply){
        return reply.sendFile("index.html")
    });

    done();
}


module.exports = invoiceRoutes;
