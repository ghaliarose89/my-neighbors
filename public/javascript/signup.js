let neighborhoods = [];

const validateUser = (user) => {
	var message = "";
	var rv = true;
	if (user.first_name === "") {
		console.log(":::here:::");
		document.getElementById("first_name").style.background = "red";
		rv = false;
	}
	if (user.last_name === "") {
		document.getElementById("last_name").style.background = "red";
		rv = false;
	}
	if (user.address === "") {
		document.getElementById("address").style.background = "red";
		rv = false;
	}
	if (user.city === "") {
		document.getElementById("city").style.background = "red";
		rv = false;
	}
	if (user.state === "") {
		document.getElementById("state").style.background = "red";
		rv = false;
	}
	if (user.zip === "") {
		document.getElementById("zip").style.background = "red";
		rv = false;
	}

	if (user.email === "") {
		document.getElementById("email").style.background = "red";
		rv = false;
	}

	if (user.password === "") {
		document.getElementById("password").style.background = "red";
		rv = false;
	}

	console.log(user.neighborhood);
	if (user.neighborhood === "0") {
		document.getElementById("neighborhood_select").style.background = "red";
		rv = false;
	} else {
		console.log(neighborhoods);
		const neighborhood = neighborhoods.find((n) => {
			return n.id == user.neighborhood;
		});
		console.log(neighborhood);
		if (neighborhood.zip1 != user.zip && neighborhood.zip2 != user.zip) {
			console.log("both false " + neighborhood.zip1 + neighborhood.zip2);
			document.getElementById("neighborhood_select").style.background = "red";
			rv = false;
		} else {
			console.log("correct zip");
		}
	}

	return rv;
};

const signupFormHandler = async (event) => {
	event.preventDefault();
	const first_name = document.getElementById("first_name").value;
	const last_name = document.getElementById("last_name").value;
	const address = document.getElementById("address").value;
	const city = document.getElementById("city").value;
	const state = document.getElementById("state").value;
	const zip = document.getElementById("zip").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const neighborhood = document.getElementById("neighborhood_select").value;

	const user = {
		first_name,
		last_name,
		address,
		city,
		state,
		zip,
		email,
		password,
		neighborhood,
	};

	if (!validateUser(user)) {
		document.querySelector(".invalid-feedback").innerHTML =
			"Required fields are missing";
		return false;
	}
	const response = await fetch("/api/users", {
		method: "POST",
		body: JSON.stringify({
			first_name,
			last_name,
			address,
			city,
			state,
			zip,
			email,
			password,
			neighbourhood_id: 1,
			is_admin: 1,
		}),
		headers: { "Content-Type": "application/json" },
	});
	if (response.ok) {
		console.log("success");
		document.location.replace("/");
	} else {
		alert(response.statusText);
	}
};

const loadNeighborhoodsData = async () => {
	const response = await fetch("/api/neighborhoods");
	if (response.ok) {
		const neighborhoods_data = response.json();
		return neighborhoods_data;
	} else return null;
};
const loadData = () => {
	let allInputs = document.querySelectorAll(".form-control,.form-select");
	for (let i = 0; i < allInputs.length; i++) {
		allInputs[i].addEventListener("focus", changeBgColor);
	}
	console.log(allInputs);
	loadNeighborhoodsData()
		.then((data) => {
			neighborhoods = data;
			console.log(neighborhoods);
			return data;
		})
		.then((err) => {});
};

function changeBgColor() {
	if (this.style.backgroundColor == "red") this.style.backgroundColor = "white";
}

document
	.getElementById("submitButton")
	.addEventListener("click", signupFormHandler);

loadData();
