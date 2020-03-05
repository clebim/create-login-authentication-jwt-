const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authconfig = require('../config/auth');

module.exports = {
    async Store(req, res){
        const { name, email, password } = req.body;
        try{
            if (await User.findOne({ email })){
                return res.status(400).send({ error: 'User already exists '});
            };

            const user = await User.create({name, email, password});
            user.password = undefined;

            const token  = jwt.sign({ id: user.id }, authconfig.secret, {
                expiresIn: 86400,
            } );

            return res.json({user, token});
        }
        catch(err){
            return res.status(400).send({error: 'Registration failed' });
        }

    }
};