const seedEvents = require("./seed-event");
const seedComments = require("./seed-comment");
const seedUsers = require("./seed-user");
const seedPosts = require("./seed-post");
const sequelize = require("../config/connection");
const seedNeighborhoods = require("./seed-neighborhood");

async function seedAll() {
	await sequelize.sync({ force: true });
	console.log("\n----- DATABASE SYNCED -----\n");
	await seedEvents();
	console.log("\n----- EVENTS SEEDED -----\n");
	await seedComments();
	console.log("\n----- COMMENTS SEEDED -----\n");
	await seedUsers();
	console.log("\n----- USERS SEEDED -----\n");
	await seedNeighborhoods();
	console.log("\n----- NEIGHBORHOODS SEEDED -----\n");
	//	await seedPosts();
	//	console.log("\n ---- POSTS seeded");
	process.exit(0);
}
seedAll();
