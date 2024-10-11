const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event){
    event.preventDefault();

//retrieve and trim input values

const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

//Initialize validation variables

let isValid = true ;
let messages = [];

//validate username

if(username.length < 3){
    isValid=false ;
    messages.push('Username must be at least 3 characters long');
}

//Email validation

if(!email.includes('@')|| !email.includes('.')){
    isValid=false;
    messages.push('Please enter a valid email address.');
}

//password validation

if(password.length < 8){
    isValid = false ;
    messages.push('Password must be atleast 8 characters long');
}
//feedback

const feedbackDiv = document.getElementById('form-feedback');
feedbackDiv.style.display="block";


if(isValid){
    feedbackDiv.textContent= 'registration successful!';
    feedbackDiv.style.color ='#28a745';
}else{
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color ='#dc3545';
}
});
