const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Neighbourhood extends Model {}

Neighbourhood.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		neighbourhood_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		zip1: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		zip2: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: false,
		modelName: "neighbourhood",
		timestamps: false
	}
);
module.exports = Neighbourhood;
