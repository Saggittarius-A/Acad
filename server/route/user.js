const express = require('express');
const router= express.Router();
const db = require("../config/db"); 

router.post('/signup', (req, res) => {
    
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    const Email = req.body.Email;
    const PhoneNumber = req.body.PhoneNumber;
    db.query(
        // "call new_registration(?,?)", [UserName, Email, Password, PhoneNumber], function (err, result) {
        //     if (err) {
        //         console.log("err:", err);
        //     } else {
        //         console.log("results:", result);
        //     }
        
        //}
        "INSERT INTO users (UserName, Password, Email, PhoneNumber) VALUES (?, ?, ?, ?);", 
        [UserName, Password, Email, PhoneNumber], 
        (err, results) =>
        {
            console.log(err);
            res.send(results);
        }
        );
});

router.post('/upload', (req, res) => {
    console.log("image");
    console.log("req.body.image");
    const image = req.body.image;
    const uid = req.body.uid;
    db.query(
        "INSERT INTO upload (image, uid) VALUES (?, ?);", 
        [image, uid], 
        (err, results) =>
        {
            console.log(err);
            res.send(results);
        }
        );
});


router.post('/signin', (req, res) => {
    const Email = req.body.Email;
    const Password = req.body.Password;
    //const UserName=req.body.UserName;
    db.query(
        "call new_login(?,?)", [Email, Password], function (err, result) {
            if (err) {
                console.log("err:", err);
            } else {
                console.log("results:", result);
                res.json({loggedIn: true, UserID: 2});
            }
        
        }
        // "SELECT * FROM users WHERE Email = ?", 
        // [Email],  
        // (err, results) => {
        //     console.log(Email);
        //     if(err){
        //         console.log(err);
        //     }
        //     if (results.length > 0) {
        //         if(Password == results[0].Password){
        //             console.log("congo bro");
        //             res.json({loggedIn: true, UserEmail: Email});
        //         }else{
        //             console.log("combo is wrong biro");
        //             res.json({
        //                 loggedIn: false, 
        //                 message: "Wrong Username and password"
        //             });
        //         }
        //     }else{
        //         console.log("Register first");
        //         res.json({loggedIn: false, message: "user doesn't exists"});
        //     }
        //     //res.send(results);
        // }
        );
}); 

module.exports = router;

