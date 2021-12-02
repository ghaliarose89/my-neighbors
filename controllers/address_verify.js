const sssdk = require("smartystreets-javascript-sdk");
const SmartyStreetsCore = sssdk.core;
const Lookup = sssdk.usStreet.Lookup;
require("dotenv").config();




// let authId = "d66b03f4-737b-002b-ed37-b9a9c1989b3e";
// let authToken = "MiuqCcCYwQdz2015keTl";
// let clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials)
// 	.withBaseUrl("YOUR URL")
// 	.withLicenses(["us-rooftop-geocoding-cloud"]);
//const credentials = new SmartyStreetsCore.StaticCredentials(authId, authToken);
const credentials = new SmartyStreetsCore.StaticCredentials(
	process.env.SS_AUTH_ID,
	process.env.SS_TOKEN
);

let client = SmartyStreetsCore.buildClient.usStreet(credentials);

function handleSuccess(response) {
	const data = response.lookups.map((lookup) => console.log(lookup.result));
	//console.log(data);
	return "result length ", response.lookups[0].result.length;
	//	return data.length;
}

function handleError(response) {
	console.log(response);
	return 0;
}

function verify_user_address(street, city, state, zip) {
	let lookup2 = new Lookup();
	lookup2.street = street;
	lookup2.lastLine = city + " , " + state;
	lookup2.zipCode = zip;
	lookup2.maxCandidates = 1;
	return client.send(lookup2).then(handleSuccess).catch(handleError);
}
console.log("VERIFY ADDRESS");

module.exports = verify_user_address;
