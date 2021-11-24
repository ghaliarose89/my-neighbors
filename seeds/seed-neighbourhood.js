const Neighbourhood = require("../models/Neighbourhood");
const sequelize = require("../config/connection");

const neighbourhood_data = [
	{
		neighbourhood_name: "WoodLand Lakes",
		zip1: 77012,
	},
	{
		neighbourhood_name: "Sugarland Lakes",
		zip1: 77001,
	},
];
const seedNeighbourhoods = () => Neighbourhood.bulkCreate(neighbourhood_data);
module.exports = seedNeighbourhoods;
