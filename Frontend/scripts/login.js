const baseUrl = 'https://ruby-vivacious-hare.cyclic.app'
// https://ruby-vivacious-hare.cyclic.app
// const baseUrl = 'http://localhost:3500';


let form = document.querySelector("form");
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
  let data = {email,password}
  loginUser(data)
})
async function loginUser(data){
  let res = await fetch(`${baseUrl}/alpine/user/login`,{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  })
  if(res.ok){
    const data = await res.json();
    // console.log(data)
    const createTime = new Date(data.createdAt).toLocaleString();
    localStorage.setItem('token', data.token);
    localStorage.setItem('name', data.firstname);
    localStorage.setItem('email', data.email);
    localStorage.setItem('createdAt', JSON.stringify(createTime));
    
    //! localStorage.setItem('name', data.firstname);
    window.location.href = './user_profile.html'
  } else{
    alert('Invalid Credentials')
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