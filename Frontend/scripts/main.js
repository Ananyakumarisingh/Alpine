let person = document.querySelector('#person');
let cart = document.querySelector('#cart');
const token = localStorage.getItem('token');
let alert_msg = document.querySelector('#alert_msg')
let alert_msg_btn = document.querySelector('#alert_msg>div>button')
person.addEventListener('click',()=>{
    if(token){
        window.location.href = "../html/user_profile.html";
    } else {
        alert_msg.classList.add('show')
    }
})
cart.addEventListener('click',()=>{
    if(token){
        window.location.href = "../html/cart.html";
    } else {
        alert_msg.classList.add('show')
        
    }
})

alert_msg_btn.addEventListener('click',()=>{
    alert_msg.classList.remove('show')

})