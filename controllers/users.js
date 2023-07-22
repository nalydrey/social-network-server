import User from '../models/users.js';

export const getUsers = async (req, res) => {
    console.log('params', req.query);

    const query = req.query

    try {
        console.log('getUsers');
        const users = await User.find(query)
        res.json({users})

    } catch (error) {
        console.log('getUsers error', error);
        res.json({error: 'getUsers error'})
    }
};





























