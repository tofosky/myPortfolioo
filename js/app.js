const hamburger=document.querySelector('.hamburger');
const link=document.querySelector('.links-container');
const closeBtn=document.querySelector('.close-btn');
const links=document.querySelectorAll('#nav-link li');
hamburger.addEventListener('click',()=>{
    link.classList.add('show-links');
    
})      
closeBtn.addEventListener('click',()=>{
    link.classList.remove('show-links');
    
})      
links.forEach((linkes)=>{
linkes.addEventListener('click',(e)=>{
    // e.preventDefault();
    link.classList.remove('show-links');
})
})



const header=document.querySelectorAll('#header')
const title=document.querySelectorAll('#title')
const p=document.querySelectorAll('#ab')
const info=document.querySelectorAll('#info');
const preloader=document.querySelector('#preloader');

const animatedBg=document.querySelectorAll('.animatedBg')
const animatedtxt=document.querySelectorAll('.animatedtxt')

const array=[
{img:`./pics/Screenshot (8).png`,
address:`name ccpt`,
info:'this project was built with wordpress',
link:'https://ccpt.bekka.app/',

},
{img:`./pics/Screenshot (90).png`,
address:`flashcard`,
info:'this project was built with html, css and javascript',
link:'https://tofosky.github.io/project1/',
},
{img:`./pics/Capture.PNG`,
address:` bank ussd transcations`,
info:'this project was built with html, css, bootsrap and javascript',
link:'https://ibro09.github.io/color-flipper/',
},
{img:`./pics/ejoy (2).png`,
address:`company's website`,
info:'this project was built with wordpress',
link:'https://enjoynigeria.org/',

},
{img:`./pics/ejoy (2).png`,
address:`emdyee collection's store`,
info:'this project was built with html, css, wow.js, bootstrap and javascript',
link:'https://ibro09.github.io/shoes-store/',
},
{img:`./pics/ejoy (2).png`,
address:`scroll project`,
info:'this project was built with html, css, bootstrap and javascript',
link:'https://ibro09.github.io/scroll-project/',
}
]

console.log();
function data(){
    header.forEach((items,index)=>[
      items.innerHTML=`<img src="${array[index].img}" width="100%" height="100%"/>`
    ])
    title.forEach((item,index)=>[
        item.innerHTML=`<h6>${array[index].address}</h6>`
      ])
    p.forEach((item,index)=>[
        item.innerHTML=`<p>${array[index].info}</p>`
      ])
    info.forEach((item,index)=>[
        item.innerHTML=`<a href=${array[index].link} target="_blank">view project here</a>`
      ])
    animatedBg.forEach(bg=>bg.classList.remove('animatedBg'))
    animatedtxt.forEach(txt=>txt.classList.remove('animatedtxt'));  
}
window.addEventListener('scroll',()=>{
  const height = window.pageYOffset;
if (height>=650) {
  setTimeout(data,3000)
}
// console.log(height);
})
function preLoader(){
  setTimeout(() => {
    preloader.style.display='none'
  }, 2000);
}
window.addEventListener('load',()=>{
   preLoader()
})