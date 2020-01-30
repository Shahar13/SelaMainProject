// TO RUN THE NODE SERVER ===>
// npm run start:server
// OR
// node server.js
const express = require('express');
const bodyParser = require('body-parser');

// var sql = require("mssql");
const sql = require('mssql/msnodesqlv8');
// config database connection credentials
const config = {
    database: 'DB_proj1Sela',
    server: '(localdb)\\sqlexpress',
    driver: 'msnodesqlv8',
    options : {
        trustedConnection : true
    }
};
// PIPE to connection 
const pool = new sql.ConnectionPool(config);

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
app.use(bodyParser.urlencoded({extended: false}));

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

/////////////////////////////////////////////////////
/////////// TEST 

// app.get('/testShahar', function (req, res) {


// var connection = {
//   host: '(localdb)\sqlexpress',
//   user: 'DB_USER_proj1Sela',
//   password: 'shahar1',
//   database: 'DB_proj1Sela'
// }

app.get('/loginUser', function (req, res) {
    console.log("USER REQUEST DATA: ")
    console.log(req.body)
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

app.get('/testShahar', function (req, res) {
    pool.connect().then(() => {
        //simple query
        pool.request().query('select * from Users', (err, result) => {
            if(err) res.send(err)
            else{
                return res.json({
                    data : result.recordset
                })
            }
        })
        sql.close();
    })    

});

// INSERT USER
app.get('/user', function (req, res) {
    pool.connect().then(() => {
        console.log('TEST INSERT');
        console.log(req);
        
        // pool.request().query(`
        //     INSERT INTO Users (Name, Email, Password, ImageSrc, DateOFBirth, WorkAddress, isAdmin) 
        //     VALUES ('Yfat', 'yfat@gmail.com', 'yfat1', 'yfat.png', '1981-08-08', 'Self Employed', 0)
        //     ` , (err, result) => {
        //     if(err) res.send(err)
        //     else{
        //         return res.json({
        //             data : result.recordset
        //         })
        //     }
        // })
        sql.close();
    })    

});


console.log('backend/app.js');

module.exports = app;

