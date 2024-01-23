const mongoose = require('mongoose');

const EducationNewsModel = mongoose.Schema({
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

const EducationUser = mongoose.model('EducationUser', EducationNewsModel);

module.exports=EducationUser;