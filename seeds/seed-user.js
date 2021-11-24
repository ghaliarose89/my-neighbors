const User = require("../models/User");
const sequelize = require("../config/connection");

const userData = [
	{
		first_name: "Steve",
		last_name: "Steins",
		email: "ssteins@gmail.com",
		password: "ss1234",
		address: "10 mainland dr",
		city: "Woodlands",
		zip: 77012,
		neighbourhood_id: 1,
	},
	{
		first_name: "misha",
		last_name: "mansion",
		email: "mmansion@gmail.com",
		password: "mm1234",
		address: "14 mainland dr",
		city: "Woodlands",
		zip: 77012,
		neighbourhood_id: 1,
	},
	{
		first_name: "abigail",
		last_name: "adams",
		email: "aadams@gmail.com",
		password: "aa1234",
		address: "18 mainland dr",
		city: "Woodlands",
		zip: 77012,
		neighbourhood_id: 1,
	},
	{
		first_name: "Jacob",
		last_name: "Jills",
		email: "jjills@gmail.com",
		password: "jj1234",
		address: "1023 sugarland dr",
		city: "Sugarland",
		zip: 77001,
		neighbourhood_id: 2,
	},
	{
		first_name: "Cindy",
		last_name: "Cannon",
		email: "ccannon@gmail.com",
		password: "cc1234",
		address: "724 Sundarban dr",
		city: "Sugarland",
		zip: 77001,
		neighbourhood_id: 2,
	},
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
