var db = require('../config/mongo-database-connect.js');

exports.editTask=function(req,res){
    var id=req.params._id,
        type=req.body.type;
    if(type=='book'){
	    db.bookModel.findOne({_id:req.body.id},function(err,docs){
		    if(docs){
		    	res.json(docs);
		    }
		    else
		    {
		    	/*
		    	*	error code
		    	*/
		    }
    	});
    }
    else if(type=='video'){
    	db.videoModel.findOne({_id:req.body.id},function(err,docs){
		    if(docs){
		      res.json(docs);
		    }
		    else
		    {
		      console.log("error in edit task");
		    }
    	});

    }
};

exports.updateTask=function(req,res){
    var details = req.body.editDetails,
   		typeOfObject = req.body.type;
    if(typeOfObject == 'book'){
	    db.bookModel.update({_id:details._id}, {$set:{genre:details.genre,title:details.title,author:details.author,Contributor:details.Contributor,description:details.description}}, function(err, result){
		    if(result){
		    	res.json(result);
		    }
		    else{
		      console.log("error");
		    }
	    });
	}
	else if(typeOfObject == 'video'){
	    db.videoModel.update({_id:details._id}, {$set:{title:details.title,type:details.type,url:details.url,Contributor:details.Contributor,description:details.description}}, function(err, result){
		    if(result){
		      res.json(result);
			}
		    else{
		      console.log("error");
		    }
	    });
	}
};

exports.deleteTask = function(req,res){
	console.log(req.body.deleteInfo);
	var deleteInfoObj = {};
		
		deleteInfoObj = req.body.deleteInfo;
	if(deleteInfoObj.type == 'books'){
		db.bookModel.remove({_id:deleteInfoObj.id}, function(response){
			console.log(response);
			//send the book response
		});
	}
	else if(deleteInfoObj.type == 'video'){
		db.videoModel.remove({_id:id},function(response){
			console.log(response);
			//send the video delete response
		});
	}
};
