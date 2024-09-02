{/* <button id="rzp-button1">Pay</button> */}
const totalDiv = document.querySelector('#total').innerText;
    const totalAmount = parseFloat(totalDiv.replace('Total: ', '')) * 100; //converting to paise
var options = {
    "key": "rzp_test_xQJcS49E6NLbJj", // Enter the Key ID generated from the Dashboard
    "amount": totalAmount.toFixed(0), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Pizza Mania", //your business name
    "description": "Pizza-Mania Transaction",
    "image": "https://example.com/your_logo",
    "handler": function (response){
        alert("Payment Done...");
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Customer Name", //your customer's name
        "email": "customerEmail@example.com", 
        "contact": "Customer phone number"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}