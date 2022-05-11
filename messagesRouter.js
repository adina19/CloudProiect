const express=require('express');
const { route } = require('express/lib/application');
const mysql=require('mysql');
const router = express.Router();
const connection=require('./database');

router.get("/",(req,res)=>{
    connection.query("SELECT * FROM messages",(err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            messages: results
        })
    });
    });

router.post("/",(req,res)=>{
    console.log(req.body);
const {
    senderName,
    senderMail,
    receiverMail,
    messageContent,
}=req.body;

if(!senderName||!senderMail||!receiverMail||!messageContent){
    return res.status(400).json({
        error: "All fields are required",
    })
}

    connection.query(`insert into messages(senderName,senderMail,receiverMail,messageContent) values(${mysql.escape(senderName)},${mysql.escape(senderMail)},${mysql.escape(receiverMail)},${mysql.escape(messageContent)})`,(err,results)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            results,
        })
    });
    
});


router.get("/:id",(req,res) => {
   const {id} =req.params;
   connection.query (`SELECT * FROM messages where entryID=${mysql.escape(id)}`,(err, results)=>{
    if(err){
        console.log(err);
        return res.send(err);
    }

if(results.length===0){
    return res.status(400).json({
        error: "Message not found",
    })
}

    return res.json({
        messages: results
    })
   } ) 
});

router.delete("/:id",(req,res) => {
    const {id}=req.params;
    connection.query(`DELETE FROM messages where entryID = ${mysql.escape(id)}`,(err, results) =>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        return res.json({
            results,
        })
    })
});

router.put("/:id",(req,res) => {
    const {id} =req.params;
    const {
        senderName,
        senderMail,
        receiverMail,
        messageContent,
    }=req.body;

    if(!senderName||!senderMail||!receiverMail||!messageContent){
        return req.status(400).json({
            error: "All fields are required",
        })
    }

        connection.query (`UPDATE messages SET senderName=${mysql.escape(senderName)}, senderMail=${mysql.escape(senderMail)},receiverMail=${mysql.escape(receiverMail)}, messageContent = ${mysql.escape(messageContent)} where entryID = ${mysql.escape(id)}`, (err,results) => {
            if(err){
                console.log(err);
                return res.send(err);
            }
            return res.json({
                results,
            })
        });
});



module.exports=router;