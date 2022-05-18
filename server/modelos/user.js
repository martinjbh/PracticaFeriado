const { sequelize, DataTypes } = require('../db/db')
// sequelize.authenticate()
// .then(()=> console.log('conectados, todo bien'))
// .catch(err => console.log('algo fallo'))
const User = sequelize.define('user', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
});
module.exports = User


