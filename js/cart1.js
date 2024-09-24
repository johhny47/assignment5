// cart 1 

const submitBtn= document.getElementById('donate-now')
const popup = document.getElementById('popup')
const main = document.getElementById('main')
document.getElementById('donate-now').addEventListener('click',function(event)

{     event.preventDefault();
    // modal 
   
    popup.classList.remove('hidden')
    main.classList.add('hidden')
    //  donation 
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
          <p class='text-xl text-black font-bold'> ${addBalanceNumber}  ${place} </p>
          <p >${new Date().toLocaleDateString()} </p>
    `
    const hitoryHeading=document.getElementById('hero-history')
    hitoryHeading.appendChild(div)
    hitoryHeading.classList.add('')

  
})

document.getElementById('ok-btn').addEventListener('click',function(event) {
   
    event.preventDefault();
  popup.classList.add('hidden')
  main.classList.remove('hidden')
    

})


