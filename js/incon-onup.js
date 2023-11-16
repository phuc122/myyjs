// menu to nho

const big = document.querySelector('.big');
const small = document.querySelector('.small');
const on =document.querySelector('.on')
const up = document.querySelector('.up')

 up.addEventListener('click',(e)=>{
 big.style.display = 'none';
 small.style.display = 'block';
 up.style.display = 'none';
 on.style.display = 'block';
 })

 on.addEventListener('click',(e)=>{
    big.style.display = 'block';
    small.style.display = 'none';
    up.style.display = 'block';
    on.style.display = 'none';
})