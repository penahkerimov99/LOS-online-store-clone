const indexbasket = document.querySelectorAll('.indexbasket');
const indexheart = document.querySelectorAll('.indexhearth');
const scrollNav = document.querySelector('.scroll-nav');
const topButton = document.querySelector('.topbutton');
const sumprice = document.querySelector('#sumprice');


const close = document.querySelector('#close');
const open = document.querySelector('#open');
const disnone = document.querySelector('.dis-none');

const hearth= document.querySelectorAll('.hearth');


const logo = document.querySelector('.main-logo');
const logo2 = document.querySelector('.main-logo2')



logo2.addEventListener('click', ()=>{
    window.location = '../HTML/main.html'
})

hearth.forEach(y => {
    y.addEventListener('click',()=>{
        window.location = '../HTML/wishlist.html'
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

indexbasket.forEach(e => {
    let data3 = localStorage.getItem('index');
    e.textContent = data3;
});

indexheart.forEach(e => {
    let data4 = localStorage.getItem('index2');
    e.textContent = data4;
});

let data1 = window.localStorage.getItem('name');
let data2 = window.localStorage.getItem('price');
let basket = localStorage.getItem('basket')
let basket1 = JSON.parse(basket)

const wishlist = document.querySelector('#wishlist');


basket1.forEach(el => {
    const list = document.createElement('tr');
    list.classList.add('list')


    const img = document.createElement('td');
    img.classList.add('img');


    const img1 = document.createElement('img');
    img1.src = el.img;


    const name = document.createElement('td');
    name.classList.add('name');


    const price = document.createElement('td');
    price.classList.add('price');


    const count = document.createElement('td');
    const inputdiv = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'number';

    input.addEventListener('input', function () {
        let valAsNumber = parseFloat(input.value);
        sum.textContent = parseInt(el.price) * valAsNumber + "AZN";
        sumprice.textContent = parseInt(el.price) * valAsNumber  + "AZN";
        
    })
    

    input.classList.add('myinp');
    count.classList.add('count');


    const color = document.createElement('td');
    color.classList.add('color');
    //    color.textContent = '--';

    const sum = document.createElement('td');
    sum.textContent = "0 AZN";

    const clse = document.createElement('td');
    clse.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    clse.addEventListener('click', () => {
        list.style.display = 'none';
        localStorage.clear();
        indexbasket.forEach(e => {
            e.textContent--;
        });
       
    })


    sum.classList.add('sum');
    name.innerText = el.name;
    price.innerText = el.price;

    wishlist.appendChild(list)
    list.appendChild(img);
    img.appendChild(img1);
    list.appendChild(name);
    list.appendChild(price);
    list.appendChild(count);
    count.appendChild(inputdiv);
    inputdiv.appendChild(input);
    list.appendChild(color);
    list.appendChild(sum);
    list.appendChild(clse);

});

const responsiveBasket = document.querySelector('.responsive-basket');

basket1.forEach(x => {
    
    const list2 = document.createElement('div');
    list2.classList.add('responsive-list');

    const img2 = document.createElement('div');
    img2.classList.add('img2');

    const img3 = document.createElement('img');
    img3.src = x.img;

    const nameProd = document.createElement('div');
    nameProd.classList.add('nameprod');
    nameProd.textContent="Məhsulun adı:"

    const name2 = document.createElement('div');
    name2.innerText = x.name;

    const priceProd = document.createElement('div');
    priceProd.classList.add('priceprod');
    priceProd.innerText="Məhsulun qiyməti:";

    const price2 = document.createElement('div');
    price2.innerText = x.price;


    const count = document.createElement('div');
    count.classList.add('responscount')
    const input = document.createElement('input');
    input.type = 'number';
    input.classList.add('myinp');
    count.classList.add('count');

    input.addEventListener('input', function () {
        let valAsNumber = parseFloat(input.value);
        sum.textContent = parseInt(x.price) * valAsNumber + "AZN";
        sumprice.textContent = parseInt(x.price) * valAsNumber  + "AZN";
        
    })

    const sum = document.createElement('div');
    sum.classList.add('sum')
    sum.textContent = "0.00 AZN";

    const secclse = document.createElement('div');
     secclse.classList.add('secclse');
    const clse = document.createElement('button');
   
    clse.innerHTML = "Səbətdən at";

    clse.addEventListener('click', () => {
        img2.style.display = 'none';
        nameProd.style.display = 'none';
        priceProd.style.display = 'none';
        count.style.display = 'none';
        sum.style.display = 'none';
        secclse.style.display = 'none';
        localStorage.clear();
        indexbasket.forEach(e => {
            e.textContent--;
        });
       
    })
 
    responsiveBasket.appendChild(list2);
    list2.appendChild(img2);
    img2.appendChild(img3)
    list2.appendChild(nameProd)
    nameProd.appendChild(name2)
    list2.appendChild(priceProd);
    priceProd.appendChild(price2)
    list2.appendChild(count);
    count.appendChild(input);
    list2.appendChild(sum)
    list2.appendChild(secclse)
    secclse.appendChild(clse)
});



