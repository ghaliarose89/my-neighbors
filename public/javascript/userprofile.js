const updateUserProfile = async (event) => {
	event.preventDefault();
	const first_name = document.getElementById("first_name").value;
	const last_name = document.getElementById("last_name").value;
	const address = document.getElementById("address").value;
	const city = document.getElementById("city").value;
	const state = document.getElementById("state").value;
	const zip = document.getElementById("zip").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value.trim();

	const user_id = document.getElementById("user-id").value;
	const fetchRequest = "/api/users/" + user_id;
	alert(address);
	if (password === "********") {
		printErrorMsg("Password cannot be blank.");
		return false;
	}
	const response = await fetch(fetchRequest, {
		method: "PUT",
		body: JSON.stringify({
			first_name,
			last_name,
			address: address,
      city,
      state,
			zip,
			email,
			password,
		}),
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		console.log("success");
		document.location.replace("/");
	} else {
		alert(response.statusText);
		printErrorMsg(response.statusText);
	}
};

function printErrorMsg(msg) {
	let errormsgHolder = document.querySelector("#submitErrorMessage");
	errormsgHolder.innerHTML = msg;
	errormsgHolder.setAttribute("style", "font-weight:bold;color:red;");
	errormsgHolder.classList.remove("d-none");
}
document
	.getElementById("submitButton")
	.addEventListener("click", updateUserProfile);
console.log(document.getElementById("CancelButton"));
document.getElementById("CancelButton").onclick = function (event) {
	event.preventDefault();
	console.log("joo");
	document.location = "/";
};
