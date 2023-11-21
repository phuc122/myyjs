const api = 'http://localhost:3000/tables';
let booking2 = '';
fetch(api)
  .then(res => res.json())
  .then(data => {
    const booking = document.getElementById('booking');
    const optionTab = document.getElementById('optionTab');
    tabletrue = data.filter((e,index) =>{
      return e.status == true;
    })
    
    tabletrue.forEach(table => {
      const listItemTable = document.createElement('option');
      listItemTable.value = table.id;
      listItemTable.textContent = ` Table ${table.id}`;
      optionTab.appendChild(listItemTable);
  })
  const optionTab2 = document.getElementById('optionTab2');
  tabletrue = data.filter((e,index) =>{
    return e.status == true;
  })
  
  tabletrue.forEach(table => {
    const listItemTable = document.createElement('option');
    listItemTable.value = table.id;
    listItemTable.textContent = ` Table ${table.id}`;
    optionTab2.appendChild(listItemTable);
})
    data.forEach(e => {
        
      const img = e.status ? "../img/datBanss.png" : "../img/datBan-default.png";
      const btnAdd = e.status ?  `<button type="button" class="btn btn-primary" id="showModalBtn" data-bs-target="#myModal" onclick=clickAdd2(${e.id})>Add</button>
    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal3">Card</button>`
    : `<button type="button" onclick=clickBooking(${e.id}) class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Booking
  </button>`
      booking2 += `
     <div class="col-6 col-md-4 col-lg-3 mt-3">
     <div class="booking">
         <h1 class="id">${e.id}</h1>
         <div class="img-table">
           <img src=${img} alt="">
         </div>
         <div class="button-table d-flex justify-content-evenly">
         ${btnAdd}
         </div>
     </div>
 </div>
     `
    });
    booking.innerHTML = booking2;
  })

//them ban
function createPost(newPost) {
  if(confirm("bạn có chắn chắn muốn thêm bàn")){
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
  
    })
      .then(response => response.json())
      .then(data => {
        update(data)
      })
  
    return;
  }
 
}
//modal


var idBooking = null;


function clickBooking(tableId) {
  idBooking = tableId;
   console.log('tableId: ', idBooking);
   
}

function updateTable() {
  const quatiz = document.getElementById('quatiz').value;
 const name = document.getElementById('name').value;


 const newTable = {
  id: idBooking,
  custumerName:name,
  quantity: quatiz,
  status: true
};

fetch(`http://localhost:3000/tables/${idBooking}`, {
  method: 'PUT',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(newTable),
})
  .then((response) => response.json())
  .then((data) => {
      console.log(data);

  })
  .catch(error => console.error('Error creating post:', error));

}