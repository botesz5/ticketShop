const button = document.querySelector("button");
button.addEventListener("click", createResult);

function createResult(){
    const quantity = document.querySelector(".myContainer div input");
    const ticketType = document.querySelector(".myContainer div:nth-child(2) select");
    const result = document.querySelector(".myContainer div:nth-child(3) input");
    let discount;
    /*
    if (ticketType.value == "adult"){
        result.value = quantity.value*350 + "Ft"
    }
    else{
        result.value = `${quantity.value*175} Ft`
    }
*/

    discount = quantity.value >= 10 ? 0.9 : 1;

    result.value = ticketType-value === "adult" ? `${quantity*350* discount}Ft` : `${quantity * 175 * discount}Ft`;

    

}