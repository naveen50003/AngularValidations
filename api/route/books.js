var db = require('../config/mongo-database-connect.js');

exports.books = function(req,res){
    db.bookModel.find(function(err,docs){
        res.json(docs);
    });
};

exports.mediaBooks = function(req,res){
    db.bookModel.find({},{cover:1,title:1},function(err,docs){
        res.json(docs);
    });
};

exports.moreBooks = function(req,res){
    db.bookModel.find({},{description:0,contributor:0},function(err,docs){
        res.json(docs);
    });
};

exports.deleteTaskBook=function(req,res){
var id=req.params._id;
db.bookModel.remove({_id:id},function(err,docs){
  if(docs){
    console.log("from del taks book");
        
    res.redirect("/#/home/books/moreBooks");
    console.log("deleted");
  }
  else
  {
    console.log("error in delete task");
  }
     return id;
});
};



exports.newBook = function(req,res){
  if(done==true){
      req.body.cover = "images/bookscovers/"+req.files.upload.name;
      req.body.status = true;
      db.bookModel(req.body).save(function(err,docs){
        if(docs){
       		res.redirect("/#/home/books/moreBooks");
    	}
    	else{
       		res.redirect("/#/home/addBook");
    	}

     });
  }
};

