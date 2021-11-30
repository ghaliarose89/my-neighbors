async function loginForm(event) {
	event.preventDefault();
	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();
	if (email === "") {
		document.querySelector("#email").style.background = "red";
		document.querySelector("#errMsg").innerHTML = "Please enter your email";
	} else if (password === "") {
		document.querySelector("#password").style.background = "red";
		document.querySelector("#errMsg").innerHTML = "Please enter your password";
	}
	if (email === "" && password === "") {
		document.querySelector("#password").style.background = "red";
		document.querySelector("#email").style.background = "red";
		document.querySelector("#errMsg").innerHTML =
			"Please enter the required information";
	}

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
			console.log("ok");
			document.location.replace("/");
		} else document.querySelector("#errMsg").innerHTML = "Wrong email OR password";
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
};
if (document.getElementById("login"))
	 document.querySelector("#login").addEventListener("click", loginForm);

if (document.getElementById("logout")) {
	document.getElementById("logout").addEventListener("click", logout);
	// document
	// 	.getElementById("userprofileButton")
	// 	.addEventListener("click", accessProfile);
}
window.onload = function () {
	//GET NEIGHBORHOODS

	let neighborhoods = [];
	loadNeighborhoodsData()
		.then((data) => {
			neighborhoods = data;
			if (document.getElementById("neighborhood_id_hidden")) {
				const user_neighborhood = document.getElementById(
					"neighborhood_id_hidden"
				).value;
				const neighborhood = neighborhoods.find(
					(n) => n.id == user_neighborhood
				);
				console.log(neighborhood);
				document.getElementById("welcome_msg_holder").innerHTML =
					"Welcome To " + neighborhood.neighborhood_name;
			}

			return data;
		})
		.then((err) => {});

	//GET EVENTS
	let events = [];
	loadEventsData()
		.then((data) => {
			events = data;
			console.log(events);
			buildEventCards(events);
		})
		.catch((err) => {
			console.log(err);
		});
};

// <div class="col mb-5 h-100">
// 	<div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
// 		<i class="bi bi-calendar3"></i>
// 	</div>
// 	<h2 class="h5"></h2>
/* <p class="mb-0">
	Paragraph of text beneath the heading to explain the heading. Here is just a
	bit more text.
</p>; */
// 	<p class="mb-0"></p>
// </div>;
function buildEventCards(events) {
	//events[0];
	for (let i = 0; i < events.length; i++) {
		const evt = events[i];

		let div1 = $("<div>").addClass("col mb-4 h-100 event-card");
		let div2 = $("<div>").addClass(
			"feature bg-primary bg-gradient text-white rounded-3 mb-3"
		);
		div2.html('<i class="bi bi-calendar3"></i>');
		console.log(evt.event_title);
		let h2 = $("<h2>").addClass("h5");
		h2.html(evt.event_title);
		let p2 = $("<p>").addClass("mb-0");
		let details = evt.event_details;
		details += "<br> <span class='fw-bold'>Start Date: " + evt.event_start_date;
		details +=
			"</span><br> <span class='fw-bold'> End Date: " + evt.event_end_date;
		details += "</span";
		p2.html(details);

		div1.append(div2, h2, p2);
		console.log(div1);
		$("#eventCardContainer").append(div1);
	}
}
