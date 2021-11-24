const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
class User extends Model {}
User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},

		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},

		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},

		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			},
		},

		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		zip: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [5],
			},
		},

		neighbourhood_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
);


module.exports = User;
