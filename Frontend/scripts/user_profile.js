

document.getElementById("user_name").innerText = localStorage.getItem('firstname') || 'User';
document.querySelectorAll('.email').innerText = localStorage.getItem('email')||"Email";