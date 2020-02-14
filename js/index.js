// Your code goes here

// adding event listener to nav items
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(item => {
  item.addEventListener('mouseover', event => {
    event.target.style.fontSize = '2rem';
    event.target.style.transition = '.3s';
    event.target.style.borderBottom = '2px solid dodgerblue';
  })
  item.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '1.6rem';
    event.target.style.borderBottom = 'none';
  })
});

