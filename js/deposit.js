// add event listener
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get deposit field from input 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // clear the deposit field
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // get deposit total from main account
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // set deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // add numbers to set the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    // set balance total
    balanceTotalElement.innerText = currentBalanceTotal;
})