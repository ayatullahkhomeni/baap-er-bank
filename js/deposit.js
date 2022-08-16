// step-1: add evet listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    // For input field use. value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;


    // step-3: get the current deposit total
    // for non-input (element other than input, textarea) use innertext to get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

    /* const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;

    console.log(withdrawAmount); */
}) 