const scrollNav = document.querySelector('.scroll-nav');
const topButton = document.querySelector('.topbutton');

const heart = document.querySelectorAll('.hearth');
const indexheart = document.querySelectorAll('.indexhearth');
const indexbasket = document.querySelectorAll('.indexbasket');
const addBasket = document.querySelectorAll('.basket-button');

const maxvalue = document.querySelector(".maxvalue");
const min = document.querySelector(".min");
const max = document.querySelector(".max");


const close = document.querySelector('#close');
const open = document.querySelector('#open');
const disnone = document.querySelector('.dis-none');
const accordion = document.querySelector('.responsive-accord');

const filter = document.querySelector('.btn-filter');
const category = document.querySelector('.category-section-2');

filter.addEventListener('click', () => {
    category.classList.toggle("d-block")
})

open.addEventListener('click', () => {
    disnone.style.display = 'block'
    open.style.display = 'none'
    close.style.display = 'block'
 
});



const basket = document.querySelectorAll('.basket');

basket.forEach(e => {
    e.addEventListener('click', () => {
        window.location = '../basket.html'
    })
});

heart.forEach(el => {
    el.addEventListener('click', () => {
        window.location = '../wishlist.html'
    })
});


close.addEventListener('click', () => {
    disnone.style.display = 'none'
    accordion.style.top = "41%"
    open.style.display = 'block'
    close.style.display = 'none'
})

//range input
min.innerHTML = maxvalue.value;
max.innerHTML = maxvalue.value;

maxvalue.oninput = function () {
    max.innerHTML = maxvalue.value;
}



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

// basket index
let data3 = localStorage.getItem('index');
indexbasket.forEach(el => {
    el.textContent = data3
});

//hearth index
let data4 = localStorage.getItem('index2');
indexheart.forEach(elem => {
    elem.textContent = data4
});


const url = '../JS/data.json';

window.onload = function () {
    fetch(url).then(res => res.json()).then(data => {


        const products = document.querySelector('.products');
        products.classList.add('grid')

        data.forEach(el => {
            const product = document.createElement('div')
            product.classList.add('productflex')

            const img = document.createElement('img')
            img.src = el.image
            img.classList.add('img-1')

            let name = document.createElement('a')
            name.innerText = el.name
            name.style.cursor = "pointer"

            name.addEventListener('click', (e) => {
                e.preventDefault;
                window.location = '../productclick.html';
                localStorage.setItem('name', name.innerText);
                localStorage.setItem('price', price.innerText);
                localStorage.setItem('img', img.src);
            })


            const button = document.createElement('button');
            button.innerText = 'Səbətə at';

            button.addEventListener('click', (el) => {
                let myArr = [];
                var old = localStorage.getItem('basket');
                if (old != null){
                    old = JSON.parse(old);
                    for (var i = 0; i < old.length; i++) {
                        myArr.push(old[i]);
                    }
                }

                var newPr = { "name": name.innerText, "price": price.innerText, "img": img.src };
                myArr.push(newPr);
                localStorage.setItem('basket', JSON.stringify(myArr));

                indexbasket.forEach(e => {
                    e.textContent++;
                    localStorage.setItem('index', e.textContent);
                });

                localStorage.setItem('name', name.innerText);
                localStorage.setItem('price', price.innerText);
                localStorage.setItem('img', img.src);

            })

            const hearth = document.createElement('div');
            hearth.classList.add('heart');

            hearth.addEventListener('click', (el) => {
               
                el.target.classList.toggle("filled");
                indexheart.forEach(element => {

                    localStorage.setItem('index2', element.textContent);

                    if (el.target.classList.toggle("filled")) {
                        element.textContent++
                        
                    } else {
                        element.textContent--
                       
                    }
                });


                let myWish = [];
                var oldWish = localStorage.getItem('wishlist');

                if (oldWish != null) {
                    oldWish = JSON.parse(oldWish);
                    for (var i = 0; i < oldWish.length; i++) {
                        myWish.push(oldWish[i]);
                    }
                }

                var newWish = { "name": name.innerText, "price": price.innerText, "img": img.src };
                myWish.push(newWish);
                localStorage.setItem('wishlist', JSON.stringify(myWish));
            })

            var price = document.createElement('p')
            price.innerText = el.price

            products.appendChild(product)
            product.appendChild(img)
            product.appendChild(name)
            product.appendChild(price)
            product.appendChild(button)
            product.appendChild(hearth)



        });


    })
}


