//paybill
function clickAdd(tableid2){
    const menu = document.querySelectorAll('.box')
    const bookingw = document.querySelectorAll('.booking')
    

    menuq[index]
    //none menu tabl
    menu[1].style.display='none';
    big2[1].classList.remove('red');
    small2[1].classList.remove('red');
    // block menu oder
    menu[3].style.display='block';
    big2[3].classList.add('red');
    small2[3].classList.add('red');
    const idoder = document.querySelector('#optionTab2')
    console.log('idoder: ', idoder);
    idoder.value = tableid2;
}