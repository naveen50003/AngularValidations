var db = require('../config/mongo-database-connect.js');
 
exports.videos = function(req,res){
	db.videoModel.find(function(err,docs){
		res.json(docs);
	});
};


exports.deleteTaskVideo=function(req,res){
		var id=req.params._id;
		db.videoModel.remove({_id:id},function(err,success){
			if(err){
				console.log("not deleted");
			}
			else
			{
				res.redirect("/#/home/books/moreVideos");
			}

		});
	};


exports.newVideo = function(req,res){
	req.body.url=req.body.url.replace("/watch?v=","/embed/");
	var vArr=req.body.url.split("/"),
		vidId=vArr[vArr.length-1];
	req.body.cover="https://img.youtube.com/vi/"+vidId+"/0.jpg";
	db.videoModel(req.body).save(function(err,docs){
		if(docs){
			 res.redirect("/#/home/books/moreVideos");
		}
		else{
				res.redirect("/#/home/addvideo");
		}
	});
};
