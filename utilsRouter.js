const express=require('express');
const router = express.Router();
const {detectLanguage, translateText}=require("./translateFunctions.js");
const {LANGUAGE_ISO_CODE} = require("./dictionaries.js")
const {detectLabels} =require("./imageRecognitionFunctions.js");

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



router.get("/translate",async (req,res) => {
    const {text, language} =req.body;

    if(!text || !language){
        return res.status(400).send("Missing Parameters");
    }

    if(!LANGUAGE_ISO_CODE[language]){
        return res.status(400).send("Invalid Language");
    }

    const translatedText = await translateText(text, LANGUAGE_ISO_CODE[language]);
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


module.exports=router;