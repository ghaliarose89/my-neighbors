const seedEvents = require("./seed-event");
const sequelize = require("../config/connection");

async function seedAll() {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");
	await seedEvents();
	console.log("\n----- EVENTS SEEDED -----\n");
	process.exit(0);
}
seedAll();
