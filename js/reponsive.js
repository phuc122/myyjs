const onup =document.querySelector('.left')
const inconmenu = document.querySelector('.menusmall')
inconmenu.onclick = ()=>{
    if(onup.style.display === 'none'){
        onup.style.display = 'block'
    }else{
        onup.style.display = 'none'
    }
}