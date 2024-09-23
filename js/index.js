
document.getElementById('donate-now').addEventListener('click',function(event)

{     event.preventDefault();
    const balance= getTextFieldValueById('tk');
    const balanceNumber= parseFloat(balance);
    const addbalance= getInputFieldValueById('input-donate-now');
    const addBalanceNumber=parseInt(addbalance);
    if(addBalanceNumber > 0){
      const  newBlance = balanceNumber+addBalanceNumber;
        document.getElementById('tk').innerText = newBlance ;
        console.log(newBlance );
    }
    else{
        alert('give an integer number')
    }
   
    
})


