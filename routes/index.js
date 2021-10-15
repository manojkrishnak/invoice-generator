const { invoiceInfo } = require("../invoiceInfo");

function invoiceRoutes(fastify, options, done) {
  fastify.get("/", function (req, reply) {
    return reply.sendFile("index.html");
  });

  fastify.get("/create_invoice", function (req, reply) {
    const easyinvoice = require("easyinvoice");
    const fs = require("fs");
    easyinvoice.createInvoice(invoiceInfo(req), function (result) {
      const pdf = result.pdf;
      fs.writeFileSync("invoice.pdf", pdf, "base64");
    });

    return reply.code(200).send("success");
  });
  done();
}

module.exports = invoiceRoutes;
