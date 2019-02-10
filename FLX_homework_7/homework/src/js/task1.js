let userLogin = prompt('Please, enter your login');

if (userLogin === 'User') {
    let userPassword = prompt('Enter the password');
        if (userPassword === 'UserPass') {
            alert(new Date().getHours() < 20 ? 'Good day, dear User!' : 'Good evening, dear User!')
        } else {
            alert('Wrong password')
        }
} else if (userLogin === 'Admin') {
    let userPassword = prompt('Enter the password');
    if (userPassword === 'RootPass') {
        alert(new Date().getHours() < 20 ? 'Good day, dear User!' : 'Good evening, dear Admin!')
    } else {
        alert('Wrong password')
    }
} else if (userLogin === null || userLogin === '') {
    alert('Canceled');        
} else if (userLogin.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else {
    alert('I don’t know you');
}