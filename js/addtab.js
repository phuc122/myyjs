function clickAdd2(tableid){
    
    const menu = document.querySelectorAll('.box')
    //none menu tabl
    menu[1].style.display='none';
    big2[1].classList.remove('red');
    small2[1].classList.remove('red');
    // block menu oder
    menu[2].style.display='block';
    big2[2].classList.add('red');
    small2[2].classList.add('red');
    const idoder = document.querySelector('#optionTab')
    idoder.value = tableid
}
