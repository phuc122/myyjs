const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});


// let wrapper1 = document.querySelector('.wrapper')
//    signIn = document.querySelector('.sign-in')
//    signUp = document.querySelector('.sign-up')
//dang ki
const sigIn = document.getElementById('signin')
const sigUp = document.getElementById('sign-up').addEventListener('submit', (e) => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var user = {
        username: username,
        email: email,
        password: password,
        img: '../img/img_avatar3.png'
    }
    userData = JSON.stringify(user);
    localStorage.setItem('user', userData);
    alert('Đăng kí thành công');
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    //chuyen len trang dang nhap
    wrapper.classList.toggle('active');
})
//dangnhap
document.getElementById('signin').addEventListener('submit', (e) => {
    e.preventDefault();
    var username = document.getElementById('username2').value;
    var password = document.getElementById('password2').value;
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);

    if (user.username == username && user.password == password) {
        alert('Đăng nhập thành công');
        window.location.href = "dashboard.html";
    } else {
        alert('Sai thông tin đăng nhập');
        return
    }
});