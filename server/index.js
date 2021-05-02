const express = require('express');
const app = express();
const cors = require("cors");
const fileUpload = require('express-fileupload');
const FileType = require('file-type');
 
// parse application/json

// app.use(fileUpload());
// app.get('/', async (req, res) => {
//     res.send('Hello vro!')
// })
// DB
// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host: 'localhost',
//     user: 'root',
//     password: 'Shruti@2002',
//     database: 'gallery',
//     //multipleStatements: true,
//     //filename: "./img.db"
//     },
//     //useNullAsDefault: true
// });



// app.post('/upload', async (req, res) => {
//     console.log("gfg");
// console.log(uid);
//     const image = req.body.image;
//     const uid= req.body.uid;
//     console.log("yess");
//     if (image && uid) {
//         await knex.insert({image: image, uid: uid}).into('upload');
//         res.sendStatus(200);
//     } else {
//         res.sendStatus(400);
//     }
// })

app.use(cors());
app.use(express.json());

const userRoute= require("./route/user");
app.use("/user", userRoute);
//const uploadRoute = require("./route/Upload");
//app.use("/upload", uploadRoute);

app.listen(3001, (req, res) => {
    console.log('Express server is running at port Node. 3001');
});