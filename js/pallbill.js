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

