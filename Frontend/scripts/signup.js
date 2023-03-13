const baseUrl = "https://ruby-vivacious-hare.cyclic.app";
// const baseUrl = 'http://localhost:3500';

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
  let cpassword = form.cpassword.value;
  let firstname = form.firstname.value;
  let country = form.country.value;
  let lastname = form.lastname.value;
  let dob = form.dob.value;
  let number = form.number.value;

  let data = {
    email,
    firstname,
    password,
    cpassword,
    number,
    country,
    lastname,
    dob,
  };
  if (password == cpassword) {
    registerUser(data);
  } else {
    alert("Confirm password does not match");
  }
});
async function registerUser(data) {
  let res = await fetch(`${baseUrl}/alpine/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    window.location.href = "./login.html";
  } else {
    const forbiden_alert = document.querySelector("#forbiden_alert");
    forbiden_alert.style.display = "block";
    setTimeout(() => {
      forbiden_alert.style.display = "none";
    }, 5000);
  }
}


// * --------------------Alert----------------------
let person = document.querySelector('#person');
let cart = document.querySelector('#cart');
const token = localStorage.getItem('token');
let alert_msg = document.querySelector('#alert_msg')
let alert_msg_btn = document.querySelector('#alert_msg>div>button')
person.addEventListener('click',()=>{
  alert_msg.classList.add('show');
})
cart.addEventListener('click',()=>{
  alert_msg.classList.add('show');
})

alert_msg_btn.addEventListener('click',()=>{
    alert_msg.classList.remove('show')
})