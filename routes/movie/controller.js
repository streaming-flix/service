const { Movie } = require('../../models');


module.exports = {
    addMovie: async (req, res) => {
     try {
            const result = await Movie.create({ 
                ...req.body, 
            });
 res.send({message: `Add movie success`, data: result});
            } catch (error) {
                console.log(error);
                res.send(error);
            }
    },

    updateMovie: async (req, res) => {
        const id = req.params.id;
        
        try {
            const result = await Movie.findByIdAndUpdate(
                { _id: id },
                {
                    ...req.body,
                }
            );

            res.send({ message: 'Update movie succes', data: result });
        } catch (error) {
            res.send(error);
        }
    },

    deleteMovie: async (req, res) => {
        const {id} = req.params;
        try{
            await Movie.findByIdAndDelete(id);

            res.send({message: 'movie deleted'});
        } catch (error) {
            res.send(error);
        }
    },
    getAllMovie : async (req, res) => {
        try{
            const result = await Movie.find().select('-password');
            res.send({
                result,
            });
        } catch (error) {
            res.send(error);
        }
    },

    findBySearch: async (req, res) => {
        const {title} = req.query;
        try {
            const result = await Movie.find({
                title: {
                    $regex: title,
                    $options: 'i',
                },
            });
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },
    getDetailMovie: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await Movie.findById(id);

            res.send(result);
        } catch (error) {
            res.send(error);
        }
    },


};