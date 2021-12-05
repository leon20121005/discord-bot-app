import sequelize from '../configs/database.js';
import { Sequelize } from 'sequelize';

const Action = sequelize.define('Action', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.STRING
    },
    command: {
        type: Sequelize.STRING
    },
    video_id: {
        type: Sequelize.STRING
    },
    created_at: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

export default Action;
