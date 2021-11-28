


const loginBtn = document.querySelector('#login');
async function loginForm (event){
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    if(email ===''){
        document.querySelector('#email').style.background = "red";
        document.querySelector('#errMsg').innerHTML= 'Please enter your email';
    }
    else
    if(password===''){
        document.querySelector('#password').style.background = "red";
        document.querySelector('#errMsg').innerHTML= 'Please enter your password';
    }
    if (email===''&& password ===''){
        document.querySelector('#password').style.background = "red";
        document.querySelector('#email').style.background = "red";
        document.querySelector('#errMsg').innerHTML= 'Please enter the required information';
    }
    
    if(email&& password) {
    const response = await fetch('/api/users/login',{
        method:'post',
        body:JSON.stringify({
            email, password
        }),
        headers: {'Content-Type': 'application/json' }
    });
    if (response.ok){
        console.log('ok')
        document.location.replace('/');
    } else alert(response.status);
    }
};

loginBtn.addEventListener('click',loginForm);