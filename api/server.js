var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer=require('multer');
var sessions=require('client-sessions');
 global.done=false;
//console.log(collections[1]);
//console.log(loginDetails);

/*
*loading the routes
*/

var routes = {};
routes.database = require('./config/mongo-database-connect.js');
routes.users = require('./route/user.js');
routes.books = require('./route/books.js');
routes.videos = require('./route/videos.js');
routes.sessions = require('./route/sessions.js');
routes.shared = require('./route/shared.js');


/*
* middlewares
*/
app.use(express.static(__dirname +'./../public'));
app.use(bodyParser.json());
app.use(sessions({
  cookieName:"session",
  secret:"adsfasdfasdfasdf"
}));


app.use(multer({ dest: './../public/images/bookscovers',
  onFileUploadComplete: function (file) {
    console.log("file"+file);
    console.log("file upload completed");
  done=true;
  console.log("file done is "+done);
}
}));


app.get('/mediaBooks', routes.books.mediaBooks);
app.get('/moreBooks', routes.books.moreBooks);
app.get('/books', routes.books.books);
app.post('/newBook', routes.books.newBook);
app.post('/updateTask', routes.shared.updateTask);


app.get('/videos', routes.videos.videos);
app.post('/newVideo', routes.videos.newVideo);

app.get('/sessions',routes.sessions.sessionData);
app.post('/register', routes.sessions.registerForSession);
app.post('/newSession',routes.sessions.addNewSessions);


/*Common tasks for many modules*/
app.post('/editTask',routes.shared.editTask);
app.post('/deleteItem',routes.shared.deleteTask);

app.post('/login', routes.users.login);
app.get('/logout', routes.users.logout);


//app.post('/updatetask', routes.users.updateTask);
app.listen(3000);
console.log("Server running...");
