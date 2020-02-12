// TO RUN THE NODE SERVER ===>
// npm run start:server
// OR
// node server.js
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const fs = require('fs');

const multer = require('multer');
const upload = multer({dest: __dirname + '../../src/assets/img'});

// const sql = require("mssql");
const sql = require('mssql/msnodesqlv8');
// config database connection credentials
const config = {
    database: 'DB_proj1Sela',
    server: '(localdb)\\sqlexpress',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};
// PIPE to connection 
const poolPromise = new sql.ConnectionPool(config).connect();
// const mongoose = require('mongoose');
// const Post = require('./models/post');
const app = express();

//Mongo connect
// mongoose.connect('mongodb+srv://shahar:NTWSjM8OFpA8VnJH@cluster0-muple.mongodb.net/ngUdemy?retryWrites=true&w=majority')
//     .then(() => {
//         console.log('backend/app.js: Connected to MongoDB');
//     })
//     .catch(() => {
//         console.log('backend/app.js: FAILED to connect to MongoDB');
//     });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// HEADERS
app.use((req, res, next) => {
    console.log('Header definition to CORS');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
});


app.post('/api/posts', (req, res, next) => {
    // Instead if the under line -> use the constructor of the Model defined in backrnd/models/post.js
    // const post = req.body;

    // const post = new Post({
    //     title: req.body.title,
    //     content: req.body.content,
    // });

    /////// SAVE TO DB
    // after save we need to get back the ID of the post - from the DB.
    // for that we ll make a promise on the save

    // post.save()
    // .then(result => {
    //     console.log('beckend/app.js promise result after save - from DB:');
    //     console.log(result);
    //     res.status(201).json({
    //         message: 'beckend/app.js: Post added successfully',
    //         postId: result._id
    //     });
    // });
});

//use function gets params as much as we want
// BUT last argument will be that (req, res, next).
app.get('/api/posts', (req, res, next) => {
    // res.send('SECOND msg from EXPRESS test');
    // const posts = [
    //     {id: 'Z000000', title: 'server side post', content: 'This is coming from the server'},
    //     {id: 'A111111', title: 'First Post', content: 'First post\'s content'},
    //     {id: 'B222222', title: 'Second Post', content: 'Second post\'s content'},
    //     {id: 'C333333', title: 'Third Post', content: 'Third post\'s content'},
    // ];

    // INSTEAD OF MOCK DATA, use this call:

    // Post
    // .find()
    // .then(documents => {
    //     console.log('backend/app.js: document from Mongo => ');
    //     console.log(documents);
    //     // res.json(posts);
    //     res.status(200)
    //     .json({
    //         message: 'backend/app.js: Posts fetched successfully',
    //         // posts: posts ==> no longer exists as an array but an obj from DB
    //         posts: documents
    //     });
    // })
    // .catch(() => {
    //     console.log('backend/app.js: FAILED to get data/documents from MongoDB');
    // });

});

app.get('/api/posts/:id', (req, res, next) => {
    // Post.findById(req.params.id)
    // .then(post => {
    //     if (post){
    //         res.status(200).json(post);
    //     }
    //     else{
    //         res.status(404).json({message: 'Post was NOT found'});
    //     }
    // })
});

//put is total write over, patch is only updating specific fields
app.put('api/post/:id', (req, res, next) => {
    // const post = new Post({
    //     _id: req.body.id,
    //     title: req.body.title,
    //     content: req.body.content,
    // })
    // Post.updateOne({_id: res.params.id}, post)
    // .then(result => {
    //     console.log('beckend/app.js successful update a post: ');
    //     console.log(result);
    //     res.status(200).json({message: 'Updated successful!' })
    // })
});

app.delete('/api/posts/:id', (req, res, next) => {
    // console.log('app.js delete postId: ' + req.params.id);
    // let tempId = req.params.id;

    // Post.deleteOne({_id: tempId})
    //     .then(result => {
    //         console.log('app.js result: ' + result);
    //     })
    // res.status(200).json({ message: 'backend/app.js: post deleted!' })
});

app.get('/loginUser', function (req, res) {
    console.log("USER REQUEST DATA: ")
    console.log(req.body);

    res.send("kuku");
    // pool.connect().then(() => {
    //     pool.request().query('select * from Users WHERE Name = req.', (err, result) => {
    //         if(err) res.send(err)
    //         else{
    //             return res.json({
    //                 data : result.recordset
    //             })
    //         }
    //     })
    //     sql.close();
    // })    

});

app.get('/allUsers', async function (req, res) {
    try {
        pool = await poolPromise;
        result = await pool.request()
            .execute('SELECT_ALL_USERS')
        res.status(200).json({
            message: 'app.js /allUsers SELECT_ALL_USERS successfully',
            data: result.recordset,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'app.js /allUsers SELECT_ALL_USERS FAIL!!!',
            error: error,
        });
    }
});

// // INSERT USER
app.post('/user', function (req, res) {
//     pool.connect().then(() => {
//         console.log('TEST INSERT');
//         console.log(req);

//         // pool.request().query(`
//         //     INSERT INTO Users (Name, Email, Password, ImageSrc, DateOFBirth, WorkAddress, isAdmin) 
//         //     VALUES ('Yfat', 'yfat@gmail.com', 'yfat1', 'yfat.png', '1981-08-08', 'Self Employed', 0)
//         //     ` , (err, result) => {
//         //     if(err) res.send(err)
//         //     else{
//         //         return res.json({
//         //             data : result.recordset
//         //         })
//         //     }
//         // })
//         sql.close();
//     })    

});


//////////////////////////////////////////////////
/////// REGISTRATION 
// image upload
////// HOW DO I SEND REQ.BODY TEXT ????????????????????????
app.post('/uploadImage', upload.single('userPicture'), (req, res) => {
// app.post('/uploadImage', function (req, res){
    console.log('/uploadImage res.body ==> ');
    console.log(req.body);
    // console.log(req.file);
    if(req.body) {
        // res.json(req.file);
    }
    else throw 'error';
});

// app.post('/uploadImage', upload.single('userPicture'), (req, res) => {
//     console.log('/uploadImage res.body ==> ' + res.body);
//     if(req.file) {
//         res.json(req.file);
//     }
//     else throw 'error';
// });

// registration of new user
app.post('/register', async function (req, res, next) {
    try {
        pool = await poolPromise;
        request = await pool.request()
            // INSERT INTO Users (Name, Email, Password, ImageSrc, DateOFBirth, WorkAddress, isAdmin) 
            // VALUES ('aaaaa', 'aaaa@gmail.com', 'aaaaaaa', 'aaaa.png', '1910-10-10', 'Being pappy', 0)
        request.input('Name', req.body.userName);
        request.input('Email', req.body.userEmail);
        request.input('Password', req.body.userPassword);
        request.input('ImageSrc', req.body.userPicture);
        request.input('DateOfBirth', req.body.userBirth);
        request.input('WorkAddress', req.body.userWorkAddress);
        request.input('IsAdmin', req.body.userIsAdmin);
        
        request.execute('INSERT_NEW_USER_USERS');

        res.status(200).json({
            message: 'app.js /register INSERT_NEW_USER_USERS successfully',
            data: request.recordset,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'aapp.js /register INSERT_NEW_USER_USERS FAIL!!!',
            error: error,
        });
    }
});


console.log('backend/app.js');

module.exports = app;

