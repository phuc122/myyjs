

const url ="http://localhost:3000/listFoods";
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
          <div class="gia">${e.gia}.000.vnd</div>
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

//add oder
function addOder(){
 const idtable = document.getElementById('optionTab').value;
 const foods = document.querySelectorAll('.nameider');

 const oderItem = [];
 foods.forEach((element,index) => {
      const oderQuatity = parseInt(element.querySelector('.soluongoder').innerText);
      console.log('oderQuatity: ', oderQuatity);
      if(oderQuatity > 0) {
        const idFood = element.querySelector('.id').innerText;
        const nameFood = element.querySelector('.namefood').innerText;
        const imgFood =element.querySelector('.imgoder').getAttribute('src');
        const giaFood =element.querySelector('.gia').innerText;
        oderItem.push({
          oderQuatity,
          idFood,
          nameFood,
          imgFood,
          giaFood
        })
      }
})
if (oderItem.length > 0) {
  const orderdb = {
    idtable,
    items: oderItem
  }
  fetch('http://localhost:3000/orders', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderdb),
})
then((response) => response.json())
    .then((data) => {
     
    })
    .catch(error => console.error('Lỗi khi thêm đơn hàng', error));
}
}
function clickCart(id) {
  const card = document.getElementById('card');
  card.innerHTML = `<button type="button" class="btn btn-primary" onclick="clickTabl(${id})" data-bs-dismiss="modal" id="paybill()">paybil</button>
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
  console.log('id: ', id);
//hien thi oder
fetch('http://localhost:3000/orders')
.then(res => res.json())
.then(data =>{
    const odertable = document.getElementById('odertable');
    const odertable2 = document.getElementById('odertable2');
    const tong = document.getElementById('paybil2');
    const orderById = data.filter(order => order.idtable == id);

    let ListOder2 = "";
    let sums = 0;
    let tOder3 ="";
    let paybillArr ='';
    let stt = 0;
    const orderInfo = document.getElementById('orderInfo');
    orderById.forEach((e)=>{
       e.items.forEach((element,index) => {
        const totalPrice = parseInt(element.oderQuatity) * parseInt(element.giaFood);
        sums +=totalPrice
        ListOder2 +=`
        <tr>
      <td>${element.nameFood}</td>
      <td class="imgModal"><img src=${element.imgFood} alt=""></td>
      <td>${element.oderQuatity}</td>
      <td>${totalPrice}.000.vnd</td>
    </tr>`;


  paybillArr += `<tr><th scope="row">${stt+1}</th>
  <td class="td__food__image"><img class="imgpaybill" src="${element.imgFood}" alt=""></td>
  <td>${element.nameFood}</td>
  <td>${element.giaFood}</td>
  <td>${element.oderQuatity}</td>
  <td>${totalPrice}.000.vnd</td></tr> `;
      stt++;
      
       })

    
    }) 
     tOder3 +=`
     <h3>Tổng tiền:</h3>
     <div class="gia">${sums}.000.vnd</div> ` 
        odertable2.innerHTML = tOder3;   
            odertable.innerHTML = ListOder2;
            orderInfo.innerHTML = paybillArr;
            tong.innerHTML = tOder3;
}) 
}
