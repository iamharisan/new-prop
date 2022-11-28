'use strict';

///////////////////////////////////////
// Modal window
console.log(document)
console.log(document.head)

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

//Selection Element
const  header = document.querySelector('.header')
console.log(header)
const allSections = document.querySelectorAll('.section');
document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)
document.getElementsByClassName('btn')

//Crerating Element
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `HEllo <button class = 'btn btn--close--cookie'>Got it</button>`
console.log(allSections)
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
header.after(message)

//deleting element;
document.querySelector('.btn--close--cookie').addEventListener('click',() => message.remove())

//style
message.style.backgroundColor = '#37383d';
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 18 + 'px';
console.log(message.style.height);

//attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.src);

//data attributes
console.log(logo.dataset.versionNumber)

//classes
logo.classList.add();
//romve()
//toggle()
//contains()

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//smooth Scrolling;(1st method)
const btnSCrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
console.log(section1)
btnSCrollTo.addEventListener('click', function(e){
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords)
  console.log(e.target.getBoundingClientRect())
  console.log('currentScroll (X/Y)',window.pageXOffset,pageYOffset)

  //SCROOLING
    // window.scrollTo(
    //   s1cords.left ,
    //    s1cords.top + window.pageYOffset
    //    )
    // window.scrollTo({
    //  left: s1cords.left + window.pageXOffset ,
    //  top: s1cords.top + window.pageYOffset,
    //  behavior:'smooth'
    // });
    //ModernWay
    section1.scrollIntoView({behavior:'smooth'})
})

//Event Handler and remove event listner
// const h1 = document.querySelector('h1');
// const alert1 = ()=> { //<= new method
//   alert(`HEllo`)
//   // h1.removeEventListener('mouseenter',alert1)
// }
// h1.addEventListener('mouseenter',alert1)
// setTimeout( ()=> h1.removeEventListener('mouseenter',alert1),3000 )
// h1.onmouseenter = () => { //<= Old School
//   alert('Enter')
// }

//Propogation
// const ronadomInt = (min,max) => 
// Math.floor(Math.random() * (max - min + 1) + min);
// const randomcolor = () => 
// `rgb(${ronadomInt(0,255)},${ronadomInt(0,255)},${ronadomInt(0,255)})`;

// document.querySelector('.nav__link').addEventListener('click',function(e){
//   console.log(e.target,e.currentTarget)
//   console.log(this)
//     console.log(randomcolor())
//     this.style.backgroundColor = randomcolor()
//     // e.stopPropagation() // <=stoppropogation
//   });

//   document.querySelector('.nav__links').addEventListener('click',function(e){
//     console.log(e.target,e.currentTarget)
//     console.log(this)
//       console.log(randomcolor())
//       this.style.backgroundColor = randomcolor()
//     });

  
//     document.querySelector('.nav').addEventListener('click',function(e){
//       console.log(e.target,e.currentTarget)
//       console.log(this)
//         console.log(randomcolor())
//         this.style.backgroundColor = randomcolor()
//       });

//Page Navigation 
//Not Efficeient Method
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   console.log(el)
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })
//Efficient Method -Event Delegation- (IMportant ******)
//1.Add event listner to common parent Elemnet;
//2.Determine what element originated event
 document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  //matching Strategies
  if(e.target.classList.contains('nav__link')) {
    console.log(e.target)
    console.log('true')
    const id =  e.target.getAttribute('href')
    console.log(id)
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})

const h1  = document.querySelector('h1')
//Going downwards
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes)
console.log(h1.children)
console.log(h1.firstChild)
console.log(h1.lastChild)
console.log(h1.firstElementChild.style.color = 'white')
console.log(h1.lastElementChild.style.color = 'white')

//Going upwards
console.log(h1.parentNode);
console.log(h1.parentElement)
//closest use to find the nearest parent element like queryselector for finding children
// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--color-primary)'

//Going Sideways
console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)
console.log(h1.parentElement.children)

//tabbing
const tabs = document.querySelectorAll('.operations__tab')
const tabcontents = document.querySelectorAll('.operations__content')
const tab_container = document.querySelector('.operations__tab-container')

tab_container.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab')
  if(!clicked) return
  tabs.forEach((t) => {
    t.classList.remove("operations__tab--active")
  })
  clicked.classList.add('operations__tab--active')
  tabcontents.forEach((c)=> {
    c.classList.remove('operations__content--active')
  })
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})

//menu fade animation

//code refactor 
const EventHandler = function( e ){
  if(e.target.classList.contains('nav__link')){
    const targetel = e.target;
    const sibilings = targetel.closest('.nav').querySelectorAll('.nav__link');
    const logo =  targetel.closest('.nav').querySelector('.nav__logo');
    sibilings.forEach((el)=>{
      if(el !== targetel) {
        el.style.opacity = this
        logo.style.opacity = this
      }
    }
    )

  }
}

const nav = document.querySelector('.nav')
nav.addEventListener('mouseover', EventHandler.bind(0.5)

// function(e){
//   EventHandler(e,0.5)
// }

// function(e){
//   if(e.target.classList.contains('nav__link')){
//     const targetel = e.target;
//     const sibilings = targetel.closest('.nav').querySelectorAll('.nav__link');
//     const logo =  targetel.closest('.nav').querySelector('.nav__logo');
//     console.log(sibilings)
//     sibilings.forEach((el)=>{
//       if(el !== targetel) {
//         el.style.opacity = 0.5
//         logo.style.opacity = 0.5
//       }
//     }
//     )

//   }
// }
)

nav.addEventListener('mouseout', EventHandler.bind(1)
// function(e){
//   EventHandler(e,1)
// }
// function(e){
//   if(e.target.classList.contains('nav__link')){
//     const targetel = e.target;
//     const sibilings = targetel.closest('.nav').querySelectorAll('.nav__link');
//     const logo =  targetel.closest('.nav').querySelector('.nav__logo');
//     console.log(sibilings)
//     sibilings.forEach((el)=>{
//      el.style.opacity = 100;
//      logo.style.opacity = 100;
//     }
//     )

//   }
// }
)

//For Sticky Navbar
// const intialcords = section1.getBoundingClientRect()
// console.log(intialcords)

// window.addEventListener('scroll',function(){
 
//   console.log(nav.offsetHeight)
//   console.log(this.scrollY)
//   if(this.scrollY > intialcords.top) nav.classList.add('sticky')
//     else nav.classList.remove('sticky')
// })

//Interection Observer

// const obsCallback = function(entries,observer) {
//   console.log(entries)
//   entries.forEach((t) => console.log(t))
//   console.log(observer)
// }

// const obsOption = {
//   root:null,
//   threshold:0.1
// }
// const observer = new IntersectionObserver(obsCallback,obsOption);
// observer.observe(section1)
const stickyNav = function(entries){
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky')
    else nav.classList.remove('sticky')
  
}
const navheight = nav.getBoundingClientRect().height
const headerele = document.querySelector('.header');
const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navheight}px`
})
headerObserver.observe(headerele)

//Reveal Sections
const sections = document.querySelectorAll('.section')
const revealSection =function(entries,observer){
  const [entry] = entries;
  console.log(entry)
  if(!entry.isIntersecting) return 
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection,
  {
    root:null,
    threshold:0.15,
  });
sections.forEach((section)=>{
  console.log(section)
  section.classList.add('section--hidden')
  sectionObserver.observe(section)
})
