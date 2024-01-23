const express = require('express');

const routes = express.Router();

const InternationalNewscontroller = require('../controller/InternationalNewscontroller');
const SportsNewscontroller = require('../controller/SportsNewscontroller');
const HelthNewscontroller = require('../controller/HelthNewscontroller');
const EducationNewsconreoller = require('../controller/EducationNewsconreoller')

const multer = require('multer');

const FileUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
            const img = Date.now() + "-" + file.originalname;
            cb(null, img);
        }
    })
}).single('img');

// InternationalInternationalNewscontroller
routes.get('/',InternationalNewscontroller.View);
routes.get('/admin',InternationalNewscontroller.AdminPage);
routes.get('/addInternationalNews',InternationalNewscontroller.addInternationalNews);
routes.post('/addInterRcord',FileUpload,InternationalNewscontroller.addRcord);
routes.get('/deleteNews',InternationalNewscontroller.deleteNews);
routes.get('/editNews',InternationalNewscontroller.edit);
routes.post('/updateNews',FileUpload,InternationalNewscontroller.updateNews);

// SportsNewscontroller
// routes.get('/',SportsNewscontroller.View);
// routes.get('/admin',SportsNewscontroller.AdminPage);
// routes.get('/addSportsNews',SportsNewscontroller.addSportsNews);
// routes.post('/addSpoRcord',FileUpload,SportsNewscontroller.addRcord);
// routes.get('/deleteNews',SportsNewscontroller.deleteNews);
// routes.get('/editNews',SportsNewscontroller.edit);
// routes.post('/updateNews',FileUpload,SportsNewscontroller.updateNews);

// // HelthNewscontroller
// routes.get('/',HelthNewscontroller.View);
// routes.get('/admin',HelthNewscontroller.AdminPage);
// routes.get('/addHelthNews',HelthNewscontroller.addHelthNews);
// routes.post('/addHelRcord',FileUpload,HelthNewscontroller.addRcord);
// routes.get('/deleteNews',HelthNewscontroller.deleteNews);
// routes.get('/editNews',HelthNewscontroller.edit);
// routes.post('/updateNews',FileUpload,HelthNewscontroller.updateNews);

// // EducationNewsconreoller
// routes.get('/',EducationNewsconreoller.View);
// routes.get('/admin',EducationNewsconreoller.AdminPage);
// routes.get('/addEducationNews',EducationNewsconreoller.addEducationNews);
// routes.post('/addEduRcord',FileUpload,EducationNewsconreoller.addRcord);
// routes.get('/deleteNews',EducationNewsconreoller.deleteNews);
// routes.get('/editNews',EducationNewsconreoller.edit);
// routes.post('/updateNews',FileUpload,EducationNewsconreoller.updateNews);

module.exports=routes