

const url ="http://localhost:3000/oder";
fetch(url)
.then(res => res.json())
.then(data =>{
    const oder1 = document.querySelector('.oder');
    let er2 = "";
    data.forEach(e =>{
      er2 += `
      <div class="col-6 col-md-4 col-lg-3 mt-3 nameider">  
      <div class="oder2">
          <h1 class="id" style="display:none" >${e.id}</h1>
          <h2 class="namefood">${e.nameFood}</h2>
          <div class="img-table">
            <img  class="imgoder"src="${e.img}" alt="">
          </div>
          <div class="gia">${e.gia}.000vnd</div>
          <div class="soluong">
            <div class="tru btn-info" style=" ">-</div>
            <div class="soluongoder btn-warning" style=" border: 0px solid;border-radius: 10px;" >${e.quantity}</div>
            <div class="cong  btn-info" style=" ">+</div>
          </div>
      </div>
  </div>
      `
    })
    oder1.innerHTML = er2;
    addEventListeners();
})
function addEventListeners(){
  const so = document.querySelectorAll('.soluongoder');
const tru = document.querySelectorAll('.tru');
const cong = document.querySelectorAll('.cong');

tru.forEach((element,index) => {
 
  element.addEventListener('click',(e)=>{
    console.log('da')
   let duong = parseInt(so[index].textContent);
   console.log('duong: ', duong);
  
   if( duong > 0){
    so[index].textContent = duong - 1;
   }
  })
})
cong.forEach((element,index) => {
  element.addEventListener('click',()=>{
    console.log('da')
    so[index].textContent = parseInt(so[index].textContent) + 1;
  }) 
})

}
//them mon
function createoder(newPost2) {

  const profileImage = document.getElementById('profileImage').files[0].name;
  const name =document.getElementById('name2').value;
  const gia2 =document.querySelector('.gia2').value;
  
  const foods = {
    img: `../img/${profileImage}`,
    nameFood: name,
    gia:gia2,
    quantity:0
  };
  // console.log(foods)
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(foods),

  })
    .then(response => response.json())
    .then(data => {
      updateUI(data);
    })

}
