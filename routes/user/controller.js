const { User } = require('../../models');
const { hashPassword } = require('../../helpers');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../helpers/token');

module.exports = {
    userRegistration: async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const checkedUser = await User.findOne({ email });

            if (checkedUser) {
                return res.send({
                    message: `Email is already registered`,
                });
            }

            const hashedPassword = await hashPassword(password);

            await User.create({
                name,
                email,
                password: hashedPassword,
            });

            res.send({
                message: `Registration success`,
            });
        } catch (error) {
            console.error(error);
        }
    },
    userLogin: async (req, res) => {
        const { email, password} = req.body;

        const registeredUser = await User.findOne({
            email,
        });

        if (registeredUser) {
            bcrypt.compare(password, registeredUser.password).then((result) => {
                if(result===true) {
                    const userData = {
                        id: registeredUser._id,
                        name: registeredUser.name,
                        email: registeredUser.email,
                    };

                    const token = createToken(userData);
                    res.send({
                        message: `Login Succesfull`,
                        token,
                        userData,
                    });
                } else {
                    res.send(`Your email or password wrong`);
                }
            });
        } else {
            res.send(`Your email is not registered`)
        }
    },
    getAllUser : async (req, res) => {
        try{
            const result = await User.find().select('-password');
            res.send({
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },
    deleteUser: async (req, res) => {
        const {_id:id} = req.params;
        try{
            await User.findByIdAndDelete(id);

            res.send({message: 'User deleted'});
        } catch (error) {
            res.send(error);
        }
    },
    updateUser: async (req, res) => {
        const id = req.params.id;
        req.body.password = await hashPassword(req.body.password);
        try {
            const result = await User.findByIdAndUpdate(
                { _id: id },
                {
                    ...req.body,
                }
            );

            res.send({ message: 'Update profil user succes', data: result });
        } catch (error) {
            res.send(error);
        }
    },


};