// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get the deposit amount from the  deposit input field
    // for input field use. value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // clear the deposit field
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // get the current deposit total 
    // for no-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // const currentDepositTotal = parseFloat(previousDepositTotalString) + parseFloat(newDepositAmountString);
    depositTotalElement.innerText = currentDepositTotal;


    //get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})