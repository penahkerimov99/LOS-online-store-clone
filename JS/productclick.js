const quantity = document.querySelector('#quanTity');
const add = document.querySelector('#add');
const reduce = document.querySelector('#reduction');

const scrollNav = document.querySelector('.scroll-nav');
const topButton = document.querySelector('.topbutton');

const indexbasket = document.querySelectorAll('.indexbasket');
const addBasket = document.querySelectorAll('.basket-button');

const close = document.querySelector('#close');
const open = document.querySelector('#open');
const disnone = document.querySelector('.dis-none');

const heart = document.querySelectorAll('.hearth');
heart.forEach(el => {
    el.addEventListener('click', () => {
        window.location = '../HTML/wishlist.html'
    })
});

const basket = document.querySelectorAll('.basket');

basket.forEach(e => {
    e.addEventListener('click', () => {
        window.location = '../HTML/basket.html'
    })
});

open.addEventListener('click', () => {
    disnone.style.display = 'block'
    open.style.display = 'none'
    close.style.display = 'block'
 
});

close.addEventListener('click', () => {
    disnone.style.display = 'none'
    open.style.display = 'block'
    close.style.display = 'none'
})

add.addEventListener('click', () => {
    quantity.textContent++
})

reduce.addEventListener('click', () => {
    quantity.textContent--   
})



// scroll menu and top button
window.addEventListener('scroll', () => {
    setTimeout(() => {
        if (window.pageYOffset >= 250) {
            scrollNav.style.display = "block";

        } else {
            scrollNav.style.display = "none";
        }
    }, 500);
});

window.addEventListener('scroll', () => {

    if (window.pageYOffset >= 100) {
        topButton.style.display = "block";

    } else {
        topButton.style.display = "none";
    }

});

addBasket.forEach(e => {
    e.addEventListener('click', (el) => {
        indexbasket.forEach(elem => {
            elem.textContent++
        });
    })
});

let data1 = window.localStorage.getItem('name');
let data2 = window.localStorage.getItem('price');
let data3 = window.localStorage.getItem('img');

 document.querySelector('.product-name').innerText = data1
 document.querySelector('.price-2').innerText= data2
 document.querySelector('#prdimg').src=data3
 


    


