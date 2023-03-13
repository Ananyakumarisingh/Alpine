// const baseUrl = 'https://ruby-vivacious-hare.cyclic.app';
const baseUrl = 'http://localhost:3500';

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

  
    let data = { email, firstname, password, cpassword, number, country, lastname, dob };
    if(password == cpassword){
      registerUser(data);
    }else {
      alert('Confirm password does not match');
    }    
  });
  async function registerUser(data){
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
      alert("Invalid Credentials");
    }
  }