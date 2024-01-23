const mongoose = require('mongoose');

const InternationalNewsModel = mongoose.Schema({
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

const InternationalUser = mongoose.model('InternationalUser', InternationalNewsModel);

module.exports=InternationalUser;