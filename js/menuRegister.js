//an hien menu
const menu = document.querySelector('.form-register');
const btn = document.querySelector('.laguages');
btn.addEventListener('click',e =>{
    e.preventDefault()
    if(menu.style.display === 'none')
    menu.style.display = 'block';
   else {
    menu.style.display = 'none';
}
})
//ấn ra ngoai menu thì ẩn menu đi
document.addEventListener('click', e => {
    // Check if the clicked element is not the button
    if (!btn.contains(e.target)) {
        // If not the button, hide the form
        menu.style.display = 'none';
    }
});
//đăng xuất
const logUp = document.querySelector('.logup').addEventListener('click',e=>{
    e.preventDefault()
    if(confirm('Bạn có chắc chắn muốn đăng xuất')){
        window.location.href = 'login.html'
    }
})