const NewsModel = require('../models/InternationalNewsmodels');
const fs = require('fs');

const AdminPage = async(req, res)=>{
    try {
        let record = await NewsModel.find({});
        return res.render('pages/adminindex', { record });

    } catch (err) {
        console.log(err);
        return false;
    }
}
const addInternationalNews = async(req, res)=>{
    return res.render('pages/International');
}

const addRcord = async(req, res)=>{
    try{
        const {title, date, desc} =req.body;
        const Add = await NewsModel.create({
            title, date, desc, img :req.file.path
        });
        if(Add){
            console.log(`News Added`);
            return res.redirect('back');
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

const View = async(req, res)=>{
    try{
        let record = await NewsModel.find({});
        return res.render('index',{record});

    }catch(err){
        console.log(err);
        return false;
    }
}



const deleteNews = async(req, res)=>{
    try{
        let DelId = req.query.id;
        let dt = await NewsModel.findById(DelId);
        fs.unlinkSync(dt.img);
        let DelNews = await NewsModel.findByIdAndDelete(DelId);
        if(DelNews){
            console.log(`News Deleted`);
            return res.redirect('back');
        }

    }catch(err){
        console.log(err);
        return false;
    }
}

const edit = async (req, res) => {
    try {
        let editId = req.query.id;
        let single = await NewsModel.findById(editId);

        if (!single) {
            console.log(`News not found for id: ${editId}`);
        }

        return res.render('pages/editpage', { single });
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}



const updateNews = async(req, res)=>{
    try{
        let id=req.body.editid;
        if(req.file){
            let Rd = await NewsModel.findById(id);
            fs.unlinkSync(Rd.img);
            let UpNew = await NewsModel.findByIdAndUpdate(id,{
                title:req.body.title,
                date:req.body.date,
                desc:req.body.desc,
                img : req.file.path
            })
                console.log(`News Updated`);
                return res.redirect('admin');
            
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports={
    AdminPage,
    addInternationalNews,
    addRcord,
    deleteNews,
    edit,
    updateNews,
    View,
}