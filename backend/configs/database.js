import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('heroku_5d9736e9e4cacd0', 'b1daf3192cf67d', '4ed3a823', {
    host: 'us-cdbr-east-04.cleardb.com',
    dialect: 'mysql'
});

export default sequelize;
