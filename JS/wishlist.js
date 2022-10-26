const scrollNav = document.querySelector('.scroll-nav');
const topButton = document.querySelector('.topbutton');

const heart = document.querySelectorAll('.heart');
const indexheart = document.querySelectorAll('.indexhearth');
const indexbasket = document.querySelectorAll('.indexbasket');
const addBasket = document.querySelectorAll('.basket-button');

const close = document.querySelector('#close');
const open = document.querySelector('#open');
const disnone = document.querySelector('.dis-none');
const accordion = document.querySelector('.responsive-accord')

const logo = document.querySelector('.main-logo');
const logo2 = document.querySelector('.main-logo2')



logo2.addEventListener('click', ()=>{
    window.location = '../HTML/main.html'
})

logo.addEventListener('click', ()=>{
    window.location = '../HTML/main.html'
})



open.addEventListener('click', () => {
    disnone.style.display = 'block'
    accordion.style.top = "120%"
    open.style.display = 'none'
    open.style.transform.rotate = 180
    close.style.display = 'block'
});

const basket = document.querySelectorAll('.basket');

basket.forEach(e => {
    e.addEventListener('click', () => {
        window.location = '../HTML/basket.html'
    })
});

indexbasket.forEach(e => {
    let data3 = localStorage.getItem('index');
    e.textContent = data3;
});



indexheart.forEach(e => {
    let data4 = localStorage.getItem('index2');
    e.textContent = data4;
});

close.addEventListener('click', () => {
    disnone.style.display = 'none'
    accordion.style.top = "41%"
    open.style.display = 'block'
    close.style.display = 'none'
})

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

const Wishlist = document.querySelector('.products');
Wishlist.classList.add('grid')
let wishlist = localStorage.getItem('wishlist')
let wishlist1 = JSON.parse(wishlist)




wishlist1.forEach(x => {
    const product = document.createElement('div')
            product.classList.add('productflex')

            const img = document.createElement('img')
            img.src = x.img
            img.classList.add('img-1')

            let name = document.createElement('a')
            name.innerText = x.name
            name.style.cursor = "pointer"

            name.addEventListener('click', (e) => {
                e.preventDefault;
                window.location = '../HTML/productclick.html';
                localStorage.setItem('name', name.innerText);
                localStorage.setItem('price', price.innerText);
                localStorage.setItem('img', img.src);
            })


            const button = document.createElement('button');
            button.innerText = 'Səbətə at';

            button.addEventListener('click', (el) => {
                let myArr = [];
                var old = localStorage.getItem('basket');
                if (old != null) {
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
                    product.style.display = 'none'
                    localStorage.clear()
                    if (el.target.classList.toggle("filled")) {
                        element.textContent++
                    } else {
                        element.textContent--
                    }
                });

            })

            var price = document.createElement('p')
            price.innerText = x.price

            Wishlist.appendChild(product)
            product.appendChild(img)
            product.appendChild(name)
            product.appendChild(price)
            product.appendChild(button)
            product.appendChild(hearth)



        
})
