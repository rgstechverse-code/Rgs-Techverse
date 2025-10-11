// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Razorpay Payment Function
function payCourse(planName, amount) {
  if(amount === 0){
    alert('Free plan selected — no payment needed.');
    return;
  }
  const options = {
    "key": "rzp_live_RSDc3AHNFqVXe9", // Replace with your Razorpay Live Key
    "amount": amount * 100, // amount in paise
    "currency": "INR",
    "name": "RGS TechVerse",
    "description": `${planName} Membership`,
    "handler": function(response){
      alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      // Verify payment on server before granting access
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "theme": {
      "color": "#6366f1"
    }
  };
  const rzp1 = new Razorpay(options);
  rzp1.open();
}

// Demo Payment Button
document.getElementById('demoPayBtn').addEventListener('click', function(){
  alert("Demo: No actual payment without server-side order creation.");
});
