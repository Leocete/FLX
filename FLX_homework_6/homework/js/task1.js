const a_number = parseFloat(prompt("Please, enter a-number", '0'));
const b_number = parseFloat(prompt("Please, enter b-number", '0'));
const c_number = parseFloat(prompt("Please, enter c-number", '0'));
let x1 = 0;
let x2 = 0;
const discrim = Math.pow(b_number, 2) - 4 * a_number * c_number;

if (!a_number || !b_number || !c_number) {
    alert('Invalid input data'); 
} else {
    if (discrim < 0) {
        alert('No solution')
    } else if (discrim === 0) {
        x1 = -b_number/2*a_number;
        alert(`x = ${x1}`)
    } else {
        x1 = (-b_number + Math.sqrt(discrim))/2*a_number;	
        x2 = (-b_number - Math.sqrt(discrim))/2*a_number;
        alert(`x1 = ${x1}, x2 = ${x2}`)
    }
}