let buy_btns = document.querySelectorAll('.buy_li_top')
let cartArray = JSON.parse(localStorage.getItem('cartArray')) || [];
buy_btns.forEach(el => {
    el.addEventListener('click', () => {
       
        let values = el.parentElement.parentElement.parentElement.querySelectorAll('p');
        let img=el.parentElement.parentElement.parentElement.querySelector('img')
        img=img.src;

        let obj = {
            title: values[0].innerText,
            price: values[3].innerText,
            img: img
        }
        cartArray.push(obj);
        localStorage.setItem('cartArray', JSON.stringify(cartArray))
    })
})
