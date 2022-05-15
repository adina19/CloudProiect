const express=require('express');
const router = express.Router();
const {detectLanguage, translateText}=require("./translateFunctions.js");
const {LANGUAGE_ISO_CODE} = require("./dictionaries.js")
const {detectLabels} =require("./imageRecognitionFunctions.js");
const connection=require('./database');
const mysql=require('mysql');

router.get("/detect",async (req,res) => {
    const {text} =req.body;

    if(!text){
        return res.status(400).send("Missing Parameters");
    }
    const languageDetection = await detectLanguage(text);
    return res.json({
        language: languageDetection[0]?.language
})

});

router.get("/translation",(req,res)=>{
    connection.query("SELECT * FROM texts",(err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            results
        })
    });
    });

router.get("/translate",async (req,res) => {
    const {messageContent, language} =req.body;

    if(!messageContent || !language){
      
        return res.status(400).send("Missing Parameters");
    }

    if(!LANGUAGE_ISO_CODE[language]){
        return res.status(400).send("Invalid Language");
    }

    const translatedText = await translateText(messageContent, LANGUAGE_ISO_CODE[language]);
    return res.json({
        translateText: translatedText[0]
})

});



router.get("/labels", async (req,res) => {
    const {link} = req.body;
    if (!link){
        return res.status(400).send ("Missing parameters");
    }
    const labels = await detectLabels(link);
    return res.json({
        labels
    })
})


router.post("/translateStore", async (req,res) => {
    const {messageContent, language} =req.body;

    if(!messageContent || !language){
      
        return res.status(400).send("Missing Parameters");
    }

    if(!LANGUAGE_ISO_CODE[language]){
        return res.status(400).send("Invalid Language");
    }

    const translatedText = await translateText(messageContent, LANGUAGE_ISO_CODE[language]);
    console.log (translatedText);

    connection.query(`insert into texts(language,translatedText,originalText) values(${mysql.escape(language)},${mysql.escape(translatedText[0])},${mysql.escape(messageContent)})`,(err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            results,
        })
    });
    
    // return res.json({
    //     translateText: translatedText[0]
// })

});


module.exports=router;