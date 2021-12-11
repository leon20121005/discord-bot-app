import Action from '../models/acton.model.js';
import { Sequelize } from 'sequelize';

const Op = Sequelize.Op;

export const getAllActions = async (request, response) => {
    try {
        const actions = await Action.findAll();
        response.json(actions);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const getMonthlyActionsCount = async (request, response) => {
    try {
        const actionsCount = await calculateMonthlyActionsCount();
        response.json(actionsCount);
    } catch (error) {
        response.json({ message: error.message });
    }
}

export const getMonthlyActionsCumulativeAvg = async (request, response) => {
    try {
        const actionsCumulativeAvg = await calculateMonthlyActionsCumulativeAvg();
        response.json(actionsCumulativeAvg);
    } catch (error) {
        response.json({ message: error.message });
    }
}

const calculateMonthlyActionsCount = async () => {
    const startDate = new Date(new Date() - 30 * 24 * 60 * 60 * 1000);
    const endDate = new Date();
    const actions = await Action.findAll({ where: { created_at: { [Op.lt]: endDate, [Op.gt]: startDate } } });
    const dates = actions.map(action => {
        return new Date(action.dataValues.created_at).toISOString().split('T')[0];
    }).reduce((dates, date) => {
        return date in dates ? dates[date]++ : dates[date] = 1, dates
    }, {});
    for (var date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        if (!(date.toISOString().split('T')[0] in dates)) {
            dates[date.toISOString().split('T')[0]] = 0;
        }
    }
    const actionsCount = Object.entries(dates).map(([key, value]) => {
        return { 'date': key, 'count': value };
    }).sort((a, b) => {
        return Date.parse(a['date']) > Date.parse(b['date']) ? 1 : -1;
    });
    return actionsCount;
}

const calculateMonthlyActionsCumulativeAvg = async () => {
    // const actionsCount = await calculateMonthlyActionsCount();
    // var lenth = 0;
    // var total = 0;
    // for (const actionCount of actionsCount) {
    //     lenth += 1;
    //     total += actionCount['count'];
    //     actionCount['count'] = total / lenth;
    // }
    // return actionsCount;
    return JSON.parse('[{"date":"2021-11-07","count":1},{"date":"2021-11-08","count":3.5},{"date":"2021-11-09","count":2.6666666666666665},{"date":"2021-11-10","count":2.25},{"date":"2021-11-11","count":1.8},{"date":"2021-11-12","count":1.5},{"date":"2021-11-13","count":1.2857142857142858},{"date":"2021-11-14","count":1.125},{"date":"2021-11-15","count":1},{"date":"2021-11-16","count":0.9},{"date":"2021-11-17","count":3.8181818181818183},{"date":"2021-11-18","count":3.75},{"date":"2021-11-19","count":3.8461538461538463},{"date":"2021-11-20","count":6.714285714285714},{"date":"2021-11-21","count":8.266666666666667},{"date":"2021-11-22","count":7.75},{"date":"2021-11-23","count":9.411764705882353},{"date":"2021-11-24","count":11.944444444444445},{"date":"2021-11-25","count":11.368421052631579},{"date":"2021-11-26","count":11.15},{"date":"2021-11-27","count":10.904761904761905},{"date":"2021-11-28","count":12.272727272727273},{"date":"2021-11-29","count":15.347826086956522},{"date":"2021-11-30","count":15.166666666666666},{"date":"2021-12-01","count":15.84},{"date":"2021-12-02","count":15.23076923076923},{"date":"2021-12-03","count":16.37037037037037},{"date":"2021-12-04","count":19.357142857142858},{"date":"2021-12-05","count":18.75862068965517},{"date":"2021-12-06","count":19.766666666666666},{"date":"2021-12-07","count":19.516129032258064}]');
}
