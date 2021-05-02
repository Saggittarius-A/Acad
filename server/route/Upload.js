// const express = require("express");
// const router = express.Router();

// const db = require("../config/db");

// router.post("/", (req, res) => {
//   const image = req.body.imageList;

//   db.query(
//     "INSERT INTO upload (image, uid ) VALUES (?, ?);",
//     [image, 1],
//     (err, results) => {
//       console.log(err);
//       res.send(results);
//     }
//   );
// });

// router.get("/", (req, res) => {
//   db.query("SELECT * FROM upload", (err, results) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(results);
//   });
// });

// // router.get("/byUser/:username", (req, res) => {
// //   const userName = req.params.username;
// //   db.query(
// //     "SELECT * FROM Uploads WHERE author = ?;",
// //     userName,
// //     (err, results) => {
// //       if (err) {
// //         console.log(err);
// //       }
// //       res.send(results);
// //     }
// //   );
// // });


// module.exports = router;