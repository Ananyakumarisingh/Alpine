const baseUrl = 'https://ruby-vivacious-hare.cyclic.app'
// https://ruby-vivacious-hare.cyclic.app

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
    localStorage.setItem('token', data.token);
    localStorage.setItem('name', data.firstname);
    localStorage.setItem('email', data.email);
    //! localStorage.setItem('name', data.firstname);
    window.location.href = './user_profile.html'
  } else{
    alert('Invalid Credentials')
  }
} 