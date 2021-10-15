const {
    invoiceData,
    generateHeader,
    generateFooter,
    generateTableRow,
    generateCustomerInformation
} = require("../invoiceInfo");


function invoiceRoutes(fastify, options, done) {
  fastify.get("/", function (req, reply) {
    return reply.sendFile("index.html");
  });

  fastify.get("/create_invoice", function (req, reply) {
    const fs = require("fs");
    const PDFDocument = require("pdfkit");

    function createInvoice(invoice, path) {
        let doc = new PDFDocument({ margin: 50 });
      
        generateHeader(doc);
        generateCustomerInformation(doc, invoice);
        generateTableRow(doc, invoice);
        generateFooter(doc);
        doc.pipe(fs.createWriteStream(path));
        doc.end();
        reply.code(200).send("success");
      }

      createInvoice(req.params, "Invoice.pdf")
  });

  done();
}

module.exports = invoiceRoutes;
