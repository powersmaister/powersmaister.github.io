function calcAmount()

 {
    let price=1000; 
    let amountInput = document.querySelector("input[name='amount-input']");
   let amountNumber = parseInt(amountInput.value);
    amountNumber=isNaN(amountNumber) ? 0 : amountNumber;

   teljes(price, amountNumber);
    }

function teljes(price,amountNumber){
    
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10){
        alert("Mondtam hogy max 10 köcsög!");
        
    } else if(amountNumber <1){
        alert("minimum 1 darab,nem látsz?");
    } else {
         let amount = amountNumber*price;


    showAmount.innerHTML = amount;
}
}
    //komment(max 1 soros) ezt nem írja ki!
 