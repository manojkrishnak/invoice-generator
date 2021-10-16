$(document).ready(function () {
  function date() {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    var todayDate = date.getDate() + "-" + monthNames[date.getMonth()]+"-"+date.getFullYear();
    console.log(todayDate)

    $("#today-date").text(todayDate);
  }

  date();

  $(".btn").click(function () {
    const sno = $("#sno").val();
    const description = $("#product-name").val();
    const quantity = $("#quantity").val();
    const price = $("#price").val();
    const discount = $("#discount").val();
    const tax = $("#vat").val();
    const total = $("#total").val();
    $.ajax({
      type: "POST",
      url: "/create_invoice",
      data: JSON.stringify({ description, quantity, price, tax }),
      contentType: "application/json",
      success: function (data) {
        console.log(data);
        window.setTimeout(()=>window.open("../public/invoice.pdf"), 3000);
      },
    });
  });
});
