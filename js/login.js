document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'ripon@gmail.com' && password === 'ripon') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Toue password vula gacosh, Toki ami tejjo sontan gosona korlam');
    }
})