/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 40;
let students = false;

let fareTicket = 800;
let discountTicket = 800*50/100;
if (age <10){
    console.log("Free ticket");
}
else if (students){
    console.log("students Ticket: " +discountTicket);
}

else if (age >= 60){
    let seniorDiscount = fareTicket*15/100;
    console.log("Senior Ticket: " + seniorDiscount);
}

else{
    console.log("Regular Ticket: " + fareTicket);
}