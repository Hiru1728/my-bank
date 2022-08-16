/*
 1. add event handler with the withdraw button
 2.get the withdarw amount from the withdraw input field 
 2.5. also make sure to convert the input into a number by using parseFloat
 3.
4.
5.get the previous balance total
6.calculate new balance total
6.5.set the new balance total
*/

// Step -1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw');
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    // console.log(typeof newWithDrawAmount);

    // Step -7: 
    withdrawField.value = '';

    if (isNaN(newWithDrawAmount)) {
        alert('Please provide a va;id number');
        return;
    }

    // Step-3:
    const withdarwtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdarwtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // Step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithDrawAmount > previousBalanceTotal) {
        alert('you do not have enough money.');
        return;
    }
    // Step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdarwtotalElement.innerText = currentWithdrawTotal;

    // Step - 6: Calculate 
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})