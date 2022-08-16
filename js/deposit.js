// Step - 1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('Deposit click');
    // step - 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    // console.log(depositAmount);
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);

    // Step -7: Clear the deposit field
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // step - 3: get the total current total amount
    // for non-input(element other than input , textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    //console.log(depositTotal);

    // Step - 4: add numbers to set the total deposit
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalString = balanceTotalElement.innerText;
    const previousTotal = parseFloat(previousTotalString);
    // console.log(typeof previousTotal);

    // Step-6:Calculate current total balance
    const currentTotal = previousTotal + currentDepositTotal;
    // set the balance total
    balanceTotalElement.innerText = currentTotal;




})