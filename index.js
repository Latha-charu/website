const bars = document.querySelector('.bars');
const block = document.querySelector('.smallscreen1');
const close = document.querySelector('.close');
const navigator = document.querySelector('.navigation');
const navheight = navigator.getBoundingClientRect().height;


// making sticky the navigator
window.addEventListener('scroll', ()=>{
    // console.log(navheight);
    const scrollheight= window.pageYOffset;
    // console.log(scrollheight);
    if(scrollheight>navheight){
        navigator.classList.add('fixed-nav');
    }else{
        navigator.classList.remove('fixed-nav');
    }

})

// closing and opening bars and close button

bars.addEventListener('click', () =>{
 block.style.display = 'block';
})

close.addEventListener('click', () =>{
    block.style.display = 'none';
   })
