//calculates how many phones and accessories you can buy while leaving a spending threshold
var TAX_RATE = 0.08;
var PHONE = 100;
var ACCESSORY = 10;
var SPENDING_THRESH = 100;
var numbPhones = 0;
var numbAccessories = 0;
var totalPrice = 0;



//intro
alert("Hi, I will tell you how many phones you can buy while leaving $" + SPENDING_THRESH + " leftover for activities.");

//prompt for bank balance
balance = Number(prompt("How much money do you have:"));

//calculate phone price including tax
var phonePrice = function() {
  return PHONE + (PHONE * TAX_RATE);
};

//calculate accessory prince including tax
var accessoryPrice = function() {
   return ACCESSORY + (ACCESSORY * TAX_RATE);
 };

//calculate how many phones you can buy
while ((phonePrice() + SPENDING_THRESH) <= balance) {
  balance = balance - phonePrice();
  totalPrice = totalPrice + phonePrice();
  numbPhones++;

  if ((accessoryPrice() + SPENDING_THRESH) <= balance) {
    balance = balance - accessoryPrice();
    totalPrice = totalPrice + accessoryPrice();
    numbAccessories++;
  } else {
    break;
  }
}

//calculate how much more money you need until you can have an additional phone
var x = (phonePrice() + SPENDING_THRESH) - balance;

console.log("Phones: " + numbPhones);
console.log("Accessories: " + numbAccessories);
console.log("total price: $" + totalPrice.toFixed(2));
console.log("leftover balance: $" + balance.toFixed(2));
console.log("You need $" + x.toFixed(2) + " more to get an additional phone.");
