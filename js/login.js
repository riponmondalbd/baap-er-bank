// add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // get the email address inside the email input field
    // always remember to use .value to get text from an input
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // get password
    // set id on the html element
    // get the element
    // get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // do not verify email password on the clint side
    // verify email and password and check whether valid user or not
    if (email === 'ripon@gmail.com' && password === 'ripon') {
        console.log('valid user')
    }
    else {
        console.log('invalid user');
    }
})