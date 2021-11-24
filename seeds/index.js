const seedEvents = require("./seed-event");
const seedComments = require("./seed-comment");
const seedUsers = require("./seed-user");
const sequelize = require("../config/connection");
const seedNeighbourhoods = require("./seed-neighbourhood");

async function seedAll() {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");
	await seedEvents();
	console.log("\n----- EVENTS SEEDED -----\n");
	await seedComments();
	console.log("\n----- COMMENTS SEEDED -----\n");
	await seedUsers();
	console.log("\n----- USERS SEEDED -----\n");
	await seedNeighbourhoods();
	console.log("\n----- NEIGHBOURHOODS SEEDED -----\n");
	process.exit(0);
}
seedAll();
