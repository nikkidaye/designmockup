window.addEventListener('load', function(){
  console.log("Hello World!");

//this is to manipulate de Dom
function calculate(){
  let totalBill = document.getElementById("total-bill").value;
    // console.log(document.getElementById("total-bill").value);
  let serviceOption = document.getElementById("service-options").value;
  // console.log(serviceOption);
  let totalParty = document.getElementById("total-party").value;
  // console.log(totalParty);
  let totalTipAmount = totalBill * serviceOption;
  console.log(totalTipAmount);
  let totalTipPerPerson = totalTipAmount / totalParty;
  console.log(totalTipPerPerson);

  totalTipPerPerson.
 let myTipAmount = document.createElement("p")

}

let submitButton = document.querySelector('#calculate-button');
// console.log(submitButton);
submitButton.onclick = function() { event.preventDefault(); calculate() };

});
