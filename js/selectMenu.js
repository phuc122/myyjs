const small2 = document.querySelectorAll(".small .menu2"); 

const big2 = document.querySelectorAll(".big .menu2")

const boxs = document.querySelectorAll(".box");

small2.forEach((element,index) => {
      element.addEventListener('click', () => {
           boxs.forEach((box,i) => {
             box.style.display = "none";
           })
           boxs[index].style.display = "block";
         
           small2.forEach((element,i) => {
            if(i == index) {
               element.classList.add("red");
            }else {
               element.classList.remove("red");
            }
         })
         big2.forEach((element,i) => {
            if(i == index) {
               element.classList.add("red");
            }else {
               element.classList.remove("red");
            }
         }) 
      })
     
})

big2.forEach((element,index) => {
   boxs[1].style.display = "block";
   element.addEventListener('click', () => {
        boxs.forEach((box,i) => {
          box.style.display = "none";
   
        })
        boxs[index].style.display = "block";
      
      
        small2.forEach((element,i) => {
         if(i == index) {
            element.classList.add("red");
         }else {
            element.classList.remove("red");
         }
      }) 

      big2.forEach((element,i) => {
         if(i == index) {
            element.classList.add("red");
         }else {
            element.classList.remove("red");
         }
      }) 
   })
  
})

