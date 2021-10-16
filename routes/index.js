const { invoiceInfo } = require("../invoiceInfo");

function invoiceRoutes(fastify, options, done) {
  fastify.get("/", function (req, reply) {
    return reply.sendFile("index.html");
  });

  fastify.post("/create_invoice", function (req, reply) {
    const easyinvoice = require("easyinvoice");
    const fs = require("fs");
    const path = require("path");
    const invoiceData = invoiceInfo(req.body);

    easyinvoice.createInvoice(invoiceData, function (result) {
      const pdf = result.pdf;
      const dirPath = path.join(__dirname, "../public", "invoice.pdf");
      fs.writeFileSync(dirPath, pdf, "base64");
    });
    return reply.code(200).send("success");
  });
  
  done();
}

module.exports = invoiceRoutes;
