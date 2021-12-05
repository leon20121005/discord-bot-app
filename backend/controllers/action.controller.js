import Action from '../models/acton.model.js';

export const getAllActions = async (request, response) => {
    try {
        const actions = await Action.findAll();
        response.json(actions);
    } catch (error) {
        response.json({ message: error.message });
    }
}
