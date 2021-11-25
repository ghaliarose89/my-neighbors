const loginBtn = document.querySelector('#login');
async function loginForm (event){
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if(email&& password) {
    const response = await fetch('/api/users/login',{
        method:'post',
        body:JSON.stringify({
            email, password
        }),
        headers: {'Content-Type': 'application/json' }
    });
    if (response.ok){
        document.location.replace('/');
    } else alert(response.status);
    }
};

loginBtn.addEventListener('click',loginForm);