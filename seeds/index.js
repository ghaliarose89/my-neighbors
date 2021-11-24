const seedEvents = require("./seed-event");
const seedComments = require("./seed-comments");
const sequelize = require("../config/connection");

async function seedAll() {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");
	await seedEvents();
	console.log("\n----- EVENTS SEEDED -----\n");
	await seedComments();
	console.log("\n----- COMMENTS SEEDED -----\n");
	process.exit(0);
}
seedAll();
