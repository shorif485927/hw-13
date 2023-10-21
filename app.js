let myHeading = document.querySelector('h1');

let btn1 = document.querySelector('.buttons-1 .btn__1');
let btn2 = document.querySelector('.buttons-1 .btn__2');

let btn3 = document.querySelector('.img__button .btn-3');
let btn4 = document.querySelector('.img__button .btn-4');

let img1 = document.querySelector('.img1');




   btn1.addEventListener('click',() =>{
      myHeading.innerHTML =  '  1.Html  2.Css 3.Bottstarap5 4.Javascript 5.Email Signature 6.Ms Office'
   })

   btn2.addEventListener('click', () =>{
      myHeading.innerHTML = 'Hellow, i am  Shorif, a web desinger.'
   })


     //light section


     btn3.addEventListener('click' , () =>{
     img1.src='./images/on.jpg'
     })

     btn4.addEventListener('click' , () =>{
  img1.src = './images/off.jpg'
     })







