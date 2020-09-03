const { Admin } = require('../../models');
const { hashPassword } = require('../../helpers');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../helpers/token');

module.exports = {
    adminRegistration: async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const checkedAdmin = await Admin.findOne({ email });

            if (checkedAdmin) {
                return res.send({
                    message: `Email is already registered`,
                });
            }

            const hashedPassword = await hashPassword(password);

            await Admin.create({
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
    adminLogin: async (req, res) => {
        const { email, password} = req.body;

        const registeredAdmin = await Admin.findOne({
            email,
        });

        if (registeredAdmin) {
            bcrypt.compare(password, registeredAdmin.password).then((result) => {
                if(result===true) {
                    const adminData = {
                        id: registeredAdmin._id,
                        name: registeredAdmin.name,
                        email: registeredAdmin.email,
                    };

                    const token = createToken(adminData);
                    res.send({
                        message: `Login Succesfull`,
                        token,
                        adminData,
                    });
                } else {
                    res.send(`Your email or password wrong`);
                }
            });
        } else {
            res.send(`Your email is not registered`)
        }
    },
    getAllAdmin : async (req, res) => {
        try{
            const result = await Admin.find().select('-password');
            res.send({
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },
    deleteAdmin: async (req, res) => {
        const {id} = req.params;
        try{
            await Admin.findByIdAndDelete(id);

            res.send({message: 'admin deleted'});
        } catch (error) {
            res.send(error);
        }
    },
    updateAdmin: async (req, res) => {
        const id = req.params.id;
        // req.body.password = await hashPassword(req.body.password);
        try {
            const result = await Admin.findByIdAndUpdate(
                { _id: id },
                {
                    ...req.body,
                }
            );

            res.send({ message: 'Update profil admin succes', data: result });
        } catch (error) {
            res.send(error);
        }
    },

};