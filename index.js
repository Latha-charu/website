const bars = document.querySelector('.bars');
const block = document.querySelector('.smallscreen1');
const close = document.querySelector('.close');


bars.addEventListener('click', () =>{
 block.style.display = 'block';
})

close.addEventListener('click', () =>{
    block.style.display = 'none';
   })
