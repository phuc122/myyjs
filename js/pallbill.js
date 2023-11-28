//paybill
const urlOder = 'http://localhost:3000/orders'
    function clickTabl(tableid2){;
     
      const menu = document.querySelectorAll('.box')
  
      //none menu tabl
      menu[1].style.display='none';
      big2[1].classList.remove('red');
      small2[1].classList.remove('red');
      // block menu oder
      menu[3].style.display='block';
      big2[3].classList.add('red');
      small2[3].classList.add('red');
      const idoder = document.querySelector('#optionTab2')
      idoder.value = tableid2;    
      
        }

const btnpaybill = document.querySelector('.paybill22');


btnpaybill.onclick = () => {
  const select = document.getElementById('optionTab2').value;
  if(confirm('bạn có muốn tính tiền hay không')){
    const updateTable = {
      id: select,
      custumerName: "",
      quantity: "",
      status: false
    }
    // dat lai ban
    fetch(api + "/" + select, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateTable),
    })
      .then(response => response.json())
      .then(data => {
        // After successful update, refresh the post list
      })
      .catch(error => console.error('Error updating post:', error));
   //xoa mon an
   fetch(`http://localhost:3000/orders?idtable=${select}`)
      .then(response => response.json())
      .then(data => {
        const orderIds = data.map(order => order.id);
        console.log('orderIds: ', orderIds);
  
        orderIds.forEach(orderId => {
          fetch(`http://localhost:3000/orders/${orderId}`, {
            method: "DELETE",
          })
            .then(() => {
              console.log(`Order ${orderId} has been deleted.`);
            })
            .catch(error => {
              console.error(`Error deleting order ${orderId}:`, error);
            });
        });
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
      });
      alert('bạn đã thanh toán thành công')

  }

}

function selectbyid() {
  const select = document.getElementById('optionTab2').value;
  
  fetch('http://localhost:3000/orders')
.then(res => res.json())
.then(data =>{
    const odertable = document.getElementById('odertable');
    const odertable2 = document.getElementById('odertable2');
    const tong = document.getElementById('paybil2');
    const orderById = data.filter(order => order.idtable == select);

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


