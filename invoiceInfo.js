const fs = require("fs");
function invoiceInfo(invoice){
  invoice.price = parseInt(invoice.price);
  invoice.tax = parseInt(invoice.tax);
    let data = {
        //    Let's add a recipient
        client: {
          company: "Client Corp",
          address: "Clientstreet 456",
          zip: "4567 CD",
          city: "Clientcity",
          country: "Clientcountry",
        },
      
        //    Now let's add our own sender details
        sender: {
          company: "Alt Electronics",
          address: "Street 123",
          zip: "123456",
          city: "New Delhi",
          country: "India",
        },
        logo: fs.readFileSync(
          "./altcampus-logo.png",
          "base64"
        ),
        invoiceNumber: "2021.0001",
        invoiceDate: formattedDate(),
        products: [
          invoice
        ],
      
        //We will use bottomNotice to add a message of choice to the bottom of our invoice
        bottomNotice: "Kindly pay your invoice within 15 days.<br>All numbers are in Indian Rupees(INR)",
        locale: 'en-US',
        currency: "INR",
        taxNotation: "gst",
      
        //      Using margin we can regulate how much white space we would like to have from the edges of our invoice
        marginTop: 25,
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 25,
      };
    return data;      
};

function formattedDate(){
    const date = new Date();
    return date.getDate()+"-"+(date.getMonth() + 1)+"-"+date.getFullYear();
}

module.exports = {
    invoiceInfo
}