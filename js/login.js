// step - 1 : add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function () {
    // step - 2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // Step - 3 : get password
    //3.a. set id on the html element
    // 3.b. get the element
    // 3.c. get the value from the element

    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    // console.log(password);

    // Don NOT VERIFY email password on the client side
    // step-4: verify email and password and check wheter valid user or invalid user
    if (email === 'hirucse91@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('you forget the password .so you can not go to the another page')
        //console.log('invalid');
    }
})