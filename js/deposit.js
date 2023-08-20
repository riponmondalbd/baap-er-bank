// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get the deposit amount from the  deposit input field
    // for input field use. value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    // get the current deposit total 
    // for no-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})