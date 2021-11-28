const loginBtn = document.querySelector("#login");
async function loginForm(event) {
	event.preventDefault();
	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();

	if (email && password) {
		const response = await fetch("/api/users/login", {
			method: "post",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		});
		if (response.ok) {
			document.location.replace("/");
		} else alert(response.status);
	}
}

async function logout() {
	const response = await fetch("/api/users/logout", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		console.log("Logged out");
		document.location.replace("/");
	} else {
		alert(response.statusText);
	}
}

function accessProfile() {
    
}
if (loginBtn) {
	loginBtn.addEventListener("click", loginForm);
}
if (document.getElementById("logout")) {
    document.getElementById("logout").addEventListener("click", logout);
    document.getElementById("userprofileButton").addEventListener("click", accessProfile);

    
}
