// Your code goes here

// adding event listener to nav items
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(item => {
  item.addEventListener('mouseover', event => {
    event.preventDefault();
    event.target.style.transition = '.3s';
    event.target.style.fontSize = '2rem';
    event.target.style.borderBottom = '2px solid dodgerblue';
  })
  item.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '1.6rem';
    event.target.style.borderBottom = 'none';
  })
});


// use stopPropagation on two similar nested events
let introContain = document.querySelector('.intro');
introContain.addEventListener('click', event => {
  event.target.style.backgroundColor = 'red';
})

let introH2 = document.querySelector('.intro').querySelector('h2');
introH2.addEventListener('click', event => {
  event.stopPropagation();
  event.target.style.backgroundColor = 'dodgerblue';
})
introH2.addEventListener('dblclick', event => {
  event.target.style.backgroundColor = '#fff';
})

let introP = document.querySelector('.intro').querySelector('p');
introP.addEventListener('click', event => {
  event.stopPropagation();
  event.target.style.backgroundColor = 'green';
})
introP.addEventListener('dblclick', event => {
  event.target.style.backgroundColor = '#fff';
})


// add event listener to destination buttons at bottom of page
let destBtn = document.querySelectorAll('.btn');
destBtn.forEach(item => {
  item.addEventListener('mouseover', event => {
    event.target.style.transition = '.3s';
    event.target.style.fontSize = '2.2rem';
  })
  item.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '1.8rem';
  })
})

