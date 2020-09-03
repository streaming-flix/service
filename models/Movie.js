const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = Schema({
image_url: {
    type: String,
},
link_triler: {
    type: String,
},
link_full:{
    type: String,
},
title:{
    type: String,
},
year:{
    type: String,
},
sipnosis:{
    type: String,
},
rating:{
    type: String,
},
genre:{
    type: String,
},
director:{
    type: String,
},
actor:{
    type: String,
},
createAt: {
    type: Date,
    default: Date.now,
},
updateAt: {
    type: Date,
    default: Date.now,
},

});

const Movie = mongoose.model(`movie`, movieSchema);

module.exports = Movie;