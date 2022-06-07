let icon = document.querySelector('.bars');
let links = document.querySelector('nav');
icon.addEventListener('click',()=> {
    links.classList.toggle('active');
})