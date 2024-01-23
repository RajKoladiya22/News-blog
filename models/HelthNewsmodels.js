const mongoose = require('mongoose');

const HelthNewsModel = mongoose.Schema({
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

const HelthUser = mongoose.model('HelthUser', HelthNewsModel);

module.exports=HelthUser;