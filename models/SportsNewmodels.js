const mongoose = require('mongoose');

const SportNewsModel = mongoose.Schema({
    title :{
        type : String,
        require : true
    },
    date :{
        type : String,
        require : true
    },
    desc :{
        type : String,
        require : true
    },
    img :{
        type : String,
        // require : true
    },
})

const SportsUser = mongoose.model('SportsUser', SportNewsModel);

module.exports=SportsUser;