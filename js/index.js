
document.getElementById('donate-now').addEventListener('click',function(event)

{     event.preventDefault();
    const totalBalance= getTextFieldValueById('total-tk');
    const totalBalanceNumber= parseFloat(totalBalance);
    const balance= getTextFieldValueById('tk');
    const balanceNumber= parseFloat(balance);
    const addbalance= getInputFieldValueById('input-donate-now');
    const addBalanceNumber=parseFloat(addbalance);
    if(addBalanceNumber > 0){
      const  newBlance = balanceNumber+addBalanceNumber;
     
        document.getElementById('tk').innerText = newBlance ;
       
        
    }
    else{
        alert('give an integer number')
    }
    const  newtotalBalance = totalBalanceNumber - addBalanceNumber ;
    document.getElementById('total-tk').innerText = newtotalBalance ;


    // history
    const place = getTextFieldValueById('donate-noakhali')
    const div =document.createElement('div')
    div.className="border-2 border-inherit p-5 rounded-xl"
    div.innerHTML =`
          <p class='text-xl text-black font-extrabold'> ${addBalanceNumber}  ${place} </p>
           <p >${new Date().toLocaleDateString()} </p>
    `
    const hitoryHeading=document.getElementById('hero-history')
    hitoryHeading.appendChild(div)
    hitoryHeading.classList.add('')
})


document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('history-btn').classList.remove('bg-[#b4f461]')
    document.getElementById('donation-btn').classList.add('bg-[#b4f461]')
      document.getElementById('hero-history').classList.add('hidden');
     document.getElementById('hero-cart').classList.remove('hidden')

}
);


document.getElementById('history-btn').addEventListener('click', function(event){
    event.preventDefault();
    
     document.getElementById('history-btn').classList.add('bg-[#b4f461]')
     document.getElementById('donation-btn').classList.remove('bg-[#b4f461]')
      document.getElementById('hero-cart').classList.add('hidden');
      document.getElementById('hero-history').classList.remove('hidden')

}
);



