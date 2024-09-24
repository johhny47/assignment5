// cart 2 
const submitBtn2= document.getElementById('donate-now2')

document.getElementById('donate-now2').addEventListener('click',function(event)

{     event.preventDefault();
    // modal 
   
    popup.classList.remove('hidden')
   
    //  donation 
    const totalBalance= getTextFieldValueById('total-tk');
    const totalBalanceNumber= parseFloat(totalBalance);
    const balance2= getTextFieldValueById('tk2');
    const balanceNumber2= parseFloat(balance2);
    const addbalance2= getInputFieldValueById('input-donate-now2');
    const addBalanceNumber2=parseFloat(addbalance2);
    
    if(addBalanceNumber2 > 0){
      const  newBlance2 = balanceNumber2+addBalanceNumber2;
      console.log(newBlance2 )
        document.getElementById('tk2').innerText = newBlance2 ;
       
        
    }
    else{
        alert('give an integer number')
    }
    const  newtotalBalance = totalBalanceNumber - addBalanceNumber2 ;
    document.getElementById('total-tk').innerText = newtotalBalance ;


    // history
    const place2 = getTextFieldValueById('donate-feni')
    const div =document.createElement('div')
    div.className="border-2 border-inherit p-5 rounded-xl "
    div.innerHTML =`
          <p class='text-xl text-black font-bold'> ${addBalanceNumber2}  ${place2} </p>
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