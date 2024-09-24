// cart 3 
const submitBtn3= document.getElementById('donate-now3')

document.getElementById('donate-now3').addEventListener('click',function(event)

{     event.preventDefault();
    // modal 
   
    popup.classList.remove('hidden')
   
    // //  donation 
   
    const totalBalance= getTextFieldValueById('total-tk');
    const totalBalanceNumber= parseFloat(totalBalance);
    const balance3= getTextFieldValueById('tk3');
    const balanceNumber3= parseFloat(balance3);
    const addbalance3= getInputFieldValueById('input-donate-now3');
    const addBalanceNumber3=parseFloat(addbalance3);
    
    if(addBalanceNumber3 > 0){
      const  newBlance3 = balanceNumber3+addBalanceNumber3;
      console.log(newBlance3 )
        document.getElementById('tk3').innerText = newBlance3 ;
       
        
    }
    else{
        alert('give an integer number')
    }
    const  newtotalBalance = totalBalanceNumber - addBalanceNumber3 ;
    document.getElementById('total-tk').innerText = newtotalBalance ;


    // history
    const place3 = getTextFieldValueById('donate-qouta')
    const div =document.createElement('div')
    div.className="border-2 border-inherit p-5 rounded-xl"
    div.innerHTML =`
          <p class='text-xl text-black font-bold'> ${addBalanceNumber3}  ${place3} </p>
          <p >${new Date().toLocaleDateString()} </p>
    `
    const hitoryHeading=document.getElementById('hero-history')
    hitoryHeading.appendChild(div)
    hitoryHeading.classList.add('')

  
})

document.getElementById('ok-btn').addEventListener('click',function(event) {
   
    event.preventDefault();
  popup.classList.add('hidden')
 
    

})