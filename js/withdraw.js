// add event handler
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get withdraw field value
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // clear withdraw field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // get withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // calculate withdraw total
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank a eto taka nai');
        return;
    }

    // set withdraw total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // calculate balance total
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set balance total
    balanceTotalElement.innerText = currentBalanceTotal;
})