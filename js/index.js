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
  event.target.style.color = '#fff';
})
introH2.addEventListener('dblclick', event => {
  event.target.style.backgroundColor = '#fff';
  event.target.style.color = '#000';
})

let introP = document.querySelector('.intro').querySelector('p');
introP.addEventListener('click', event => {
  event.stopPropagation();
  event.target.style.backgroundColor = 'dodgerblue';
  event.target.style.color = '#fff';
})
introP.addEventListener('dblclick', event => {
  event.target.style.backgroundColor = '#fff';
  event.target.style.color = '#000';
})


// add event listener to destination buttons at bottom of page
let destBtn = document.querySelectorAll('.btn');
destBtn.forEach(item => {
  item.addEventListener('mouseover', event => {
    event.target.style.transition = '.3s';
    event.target.style.fontSize = '2.2rem';
    event.target.style.border = '2px solid #17a2b8';
  })
  item.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '1.8rem';
    event.target.style.border = '1px solid #c0c0c0';
  })
})

// mvp complete 2/13/20 9:20pm