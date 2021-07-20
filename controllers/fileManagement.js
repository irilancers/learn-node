
const fs = require('fs');
const path = require('path');

const uploadImages = (req,res)=>{
    console.log(req.files);
    const file1 = req.files.myfile;
    file1.mv(`./images/${file1.name}`,err=>{
        if(err){
            res.status(500).json({message:'error',error:err});
            return;
        }

        let isExists = false;

        fs.readdirSync('./images').forEach(file=>{
            console.log(file);

            if(file==file1.name){
                res.status(417).json({message:'file exists'});
                isExists=true;
                return;
            }

        });

        if(!isExists)
            res.status(200).json({message:'file was uploaded successful'});

    })
}

const downloadImages = (req,res)=>{

    const {imageId} = req.query;
    
    let mypath = path.join(__dirname,'..', 'images')+`${process.platform=='win32' ? '\\':'/'}${imageId}.jpg`;
   
    res.status(200).sendFile(mypath,err=>{
        if(err)
            res.status(500).json({message:'error',error:err});
        else{
            console.log('OK');
        }
    });
}

const getAllFiles = (req,res)=>{
    const arr = [];
    fs.readdirSync('./images').forEach(file=>{
        arr.push(`http://localhost:3000/${file}`);
    });

    res.status(200).json({images:arr});

}

module.exports = {uploadImages,downloadImages,getAllFiles};
