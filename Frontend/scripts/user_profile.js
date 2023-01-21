let uname = localStorage.getItem("name");
let email = localStorage.getItem("email");

let username = document.querySelector('#user_name')
username.innerText = uname;

let useremail = document.querySelectorAll('.email')
for(let e of useremail){
    e.innerText = email;
}

//! ------ signout functionality ---------

let signout_btn = document.querySelector('.signout_btn');
signout_btn.addEventListener('click', (e)=>{
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('token')
})