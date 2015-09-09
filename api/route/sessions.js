var db = require('../config/mongo-database-connect.js');

exports.sessionData = function(req,res){
    db.sessionsModel.find(function(err,docs){
        res.json(docs);
    });
};

exports.registerForSession = function(req,res){

	var registerSessionDetails=new db.registeredSessionsModel();
	registerSessionDetails.userId=req.body.idDetails.userId;
	registerSessionDetails.sessionId=req.body.idDetails.sessionId;
	registerSessionDetails.save(function(err,docs){
	    res.json(docs);
	});	
};

exports.addNewSessions = function(req,res){
	/*
	*new Sessions is inserted here
	*/
	db.sessionsModel(req.body).save(function(err,docs){
	    if(docs){
	   		res.redirect("/#/home/calender/myCalendar");
		}
		else{
	   		res.redirect("/#/home/calendar/addSession");
		}
    });
};