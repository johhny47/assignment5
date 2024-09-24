
// feature of two button 
//  cart1
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
// cart2 
document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    document.getElementById('history-btn').classList.remove('bg-[#b4f461]')
    document.getElementById('donation-btn').classList.add('bg-[#b4f461]')
    document.getElementById('hero-history').classList.add('hidden');
    document.getElementById('hero-cart2').classList.remove('hidden')

}
);
document.getElementById('history-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    document.getElementById('history-btn').classList.add('bg-[#b4f461]')
    document.getElementById('donation-btn').classList.remove('bg-[#b4f461]')
    document.getElementById('hero-cart2').classList.add('hidden');
    document.getElementById('hero-history').classList.remove('hidden')

}
);

// cart3 
document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    document.getElementById('history-btn').classList.remove('bg-[#b4f461]')
    document.getElementById('donation-btn').classList.add('bg-[#b4f461]')
    document.getElementById('hero-history').classList.add('hidden');
    document.getElementById('hero-cart3').classList.remove('hidden')

}
);
document.getElementById('history-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    document.getElementById('history-btn').classList.add('bg-[#b4f461]')
    document.getElementById('donation-btn').classList.remove('bg-[#b4f461]')
    document.getElementById('hero-cart3').classList.add('hidden');
    document.getElementById('hero-history').classList.remove('hidden')

}
);

// blog 
document.getElementById('blog-btn').addEventListener('click',function() {
   
    console.log("hi")
  window.location.href='../blog.html'

});



