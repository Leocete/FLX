const price = parseInt(prompt('Please, enter the price:'));
const discount = parseInt(prompt('Please, enter the discount amount:'));

const newPrice = (((9999999 > price) && price) && ((99 > discount) && discount)) 
    ? (price - price * discount / 100) 
    : (null);
const savedMoney = (price - newPrice).toFixed(2);

const answer = newPrice
    ? 
    `
    New price is: ${newPrice}
    Price without discount: ${price}
    Discount: ${discount}%'
    Price with discount:: ${newPrice}
    Saved: ${savedMoney}
    `
    : `Invalid input data`

alert(answer)