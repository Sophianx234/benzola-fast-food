  function payWithPaystack() {
    let handler = PaystackPop.setup({
      key: "pk_test_47942aac0ea9216a4c98d03ca6dddd51ef89b627", // Replace with your actual key
      email: "customer@example.com",
      amount: 5000 * 100, // Convert to kobo
      currency: "GHS",
      ref: "TXN_" + Math.floor(Math.random() * 1000000000),
      callback: function (response) {
        alert("Payment Successful! Transaction Reference: " + response.reference);
        console.log(response);
      },
      onClose: function () {
        alert("Payment Window Closed");
      },
    });
    handler.openIframe();
  }



  const btn = document.querySelector('.pay')

  btn.addEventListener('click',(e)=>{
    e.preventDefault()
    payWithPaystack()

  })