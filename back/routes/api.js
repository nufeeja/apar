const express = require('express')
const router = express.Router()
const DATA = require('../models/response')
const pastDATA = require('../models/past')
const {upload} =require('../middlewares/upload')


// full list read
router.get('/listresponse', async (req, res) => {

    try{
        const files = await DATA.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// add

router.post('/addresponse',upload.single('resfile'), async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    try{
        
        const file = new DATA({
            name: req.body.name,
            area: req.body.area,
            ic: req.body.ic,
            category:req.body.category,
            hour:req.body.hour,
            comment:req.body.comment,
            status:req.body.status,
            resfile:req.file.originalname,
            filePath: req.file.path
        });
        let savedData= await file.save();
        res.status(200).send({success:'created successfully'});
    }catch(error) {
        res.status(400).send(error.message);
    }
})

// get single data

router.get('/singleresponse/:id', async (req, res) => {

    try{
        let id = req.params.id;
        const files = await DATA.findById(id);
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})


//edit response

router.put('/editresponse/:id', upload.single('resfile'), async (req,res)=>{
    try {
        let id=req.params.id
        let item={
            name: req.body.name,
            area: req.body.area,
            ic: req.body.ic,
            category:req.body.category,
            hour:req.body.hour,
            comment:req.body.comment,
            status:req.body.status,
            resfile:req.file.originalname,
            filePath: req.file.path
        }
        let update={
            $set:item
        }
        const updateResponse=await DATA.findByIdAndUpdate({'_id':id},update)
        res.status(200).send(updateResponse)
        
    } catch (error) {
        res.status(400).send(error.message);
        
    }

})

// delete

router.delete('/deleteresponse/:id',async (req,res)=>{
    try {
        let id=req.params.id
        const deleteResponse= await DATA.findByIdAndDelete(id)
        res.send(deleteResponse)
    } catch (error) {
        console.log(error)
        
    }
    
})

// add past curriculum

router.post('/addpast',upload.single('rfile'), async (req, res) => {
    try{
        
        const file = new pastDATA({
            name: req.body.name,
            area: req.body.area,
            ic: req.body.ic,
            category:req.body.category,
            hour:req.body.hour,
            resfile:req.file.originalname
        });
        await file.save();
        res.status(201).send({success:'created successfully'});
    }catch(error) {
        res.status(400).send(error.message);
    }
})

// get past curriculum

router.get('/listpast', async (req, res) => {

    try{
        const files = await pastDATA.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// get single past curriculum

router.get('/singlepast/:id', async (req, res) => {

    try{
        let id = req.params.id;
        const files = await pastDATA.findById(id);
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }

})

// admin edit

router.put('/adminedit/:id', async (req,res)=>{
    try {
        let id=req.params.id
        let item={
            name: req.body.name,
            area: req.body.area,
            ic: req.body.ic,
            category:req.body.category,
            hour:req.body.hour
        }
        let update={
            $set:item
        }
        const updateResponse=await DATA.findByIdAndUpdate({'_id':id},update)
        res.status(200).send(updateResponse)
        
    } catch (error) {
        res.status(400).send(error.message);
        
    }

})

// status update

router.put('/statusupdate', async (req, res) => {
    let id = req.body._id
    let item = {  //to fetch and save data from front end in server
        status: req.body.status,

    }
    let updateData = { $set: item }

    await DATA.findOneAndUpdate({ _id: id }, updateData)

    res.json();
})

//get approve curri
router.get('/currfac',async(req,res)=>{
    try{
        let currfa=await DATA.find({"status":"approved"})
        res.send(currfa)
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router