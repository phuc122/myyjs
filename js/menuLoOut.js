//show menu
const menu = document.querySelector('.form-register');
const btn = document.querySelector('.laguages');
btn.addEventListener('click',e =>{
    e.preventDefault()
    if( menu.style.display === 'none')
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
// fetch('http://localhost:3000/imgLogin')
// .then(res=>res.json())
// .then(data=>{
//     const imglogin = document.getElementById('imglogin');
//     console.log('imglogin: ', imglogin);

//     data.forEach(element => {
//     arr +=`
//     <img src="${element.img}" alt="Avatar" style="width:80%" id="">
//     `
// });
// imglogin.innerHTML = arr;
// }

// )
function getUser() {
   const userData = localStorage.getItem("user");
   const userview = JSON.parse(userData);
   const avatar = document.querySelectorAll(".avatar"); 
     avatar.forEach((e)=>{
        e.src = userview.img;
     })
    
 

}
getUser();
// hàm sử lý form thông tin
document.addEventListener('DOMContentLoaded', function() {
    const updateForm = document.getElementById('updateForm');
    const imagePreview = document.querySelectorAll('.avatar');
    const profileImageInput = document.getElementById('profileImage2');
  
    profileImageInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
        var  imageURL = URL.createObjectURL(file);
         imagePreview.forEach((element) => {
          element.src = imageURL;
         });

      } else {
        imagePreview.style.display = 'none';
      }
    });
})