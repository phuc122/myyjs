const dashboarh = document.querySelector('.dashboarh')
const Reservations =document.querySelector('.Reservations')
const OrderFood = document.querySelector('.OrderFood')
const PayBills = document.querySelector('.PayBills')
const Infomation = document.querySelector('.Infomation')
 
const menu2 =['dashboarh','Reservations','OrderFood','PayBills','Infomation']
function dashboarhShow(){
   if(menu2){
    dashboarh.style.display = 'block'
   }
}
