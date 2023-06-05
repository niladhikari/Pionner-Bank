 //login btn event handler
 document.getElementById('login').addEventListener('click', function () {
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none'; //enter ei click korar shate shate login arae chole jabe.

    var transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block'; 
//ei event ta hobe,,jokhon enter ei click korbe login page chole jabe ar transaction page show korbe.
})

//Deposit btn event handler

document.getElementById('deposit-btn').addEventListener('click', function () {
    var depositAmount = document.getElementById('deposit-amount').value;
    var depositNumber = parseFloat(depositAmount); //ekhane string amount ke number ei convart kore

    updateSpanText('currentDeposit', depositNumber); //ekhane function call er madhome deposit add kora hoiteche            
    // var currentDeposit = document.getElementById('currentDeposit').innerText;
    // var currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;
                                                  
    updateSpanText('currentBalance', depositNumber);//ekhane function call er madhome Balance add kora hoiteche
    // var currentBalance = document.getElementById('currentBalance').innerText;
    // var currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('deposit-amount').value = '';
})


//this function for add amount

function updateSpanText(id, depositNumber) {
    var currentBalance = document.getElementById(id).innerText;
    var currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}





//Withdraw btn event handler

document.getElementById('withdraw-btn').addEventListener('click', function () {
    var withdrawAmount = document.getElementById('withdraw-amount').value;
    var withdrNumber = parseFloat(withdrawAmount);

    updateSpanText('currentWithdraw', withdrNumber);//ekhane function call er madhome wihdraw add kora hoiteche
    // var currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // var currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrNumber + currentWithdrawNumber;
    // document.getElementById('currentWithdraw').innerText = totalWithdraw;
   

    updateSpanText('currentBalance', -1 * withdrNumber); //ekhane -1 * withdeawnumber dara 
    //jokhon withdraw add kora hobe balance theke taka kome jabe


    // var currentBalance = document.getElementById('currentBalance').innerText;
    // var currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber - withdrNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;
    

    document.getElementById('withdraw-amount').value = '';
//er mardhome je number deoya hoy,ta ar show korbe na.


})