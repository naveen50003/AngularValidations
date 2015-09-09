var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/cigyantv');
 var loginModel=mongoose.model('loginSchema',
               new Schema({ username: String, password: String, id: Number}),
               'loginDetails');

var bookModel=mongoose.model('bookSchema',
               new Schema({ title:{type:"String"}, author:{type:"String"}, genre:{type:"String"}, description:{type:"String"}, status: {type:"String"}, cover: {type:"String"}}),
               'books');
var videoModel=mongoose.model('videoSchema',
               new Schema({ title: String, type: String, Contributor: String, description: String }),
               'videos');
var sessionsModel = mongoose.model('sessions',new Schema({
      					courseName:{type:"String"},
      					courseCode:{type:"String"},
      					startDate:{type:"String"},
              	endDate:{type:"String"},
              	startTime:{type:"String"},
              	endTime:{type:"String"},
              	venue:{type:"String"},
              	trainer:{type:"String"},
              	targetAudience:{type:"string"},
              	adminApprovalStatus:{type:"Boolean",defaultValue:false}
				      }),'sessions');
var registeredSessionsModel = mongoose.model('registeredSessions',
				      new Schema({
                 sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'sessions' } ,
                 userId: { type: mongoose.Schema.Types.String, ref: 'loginDetails' }
              }),'registeredSessions');

exports.loginModel=loginModel;
exports.bookModel=bookModel;
exports.videoModel=videoModel;
exports.sessionsModel = sessionsModel;
exports.registeredSessionsModel = registeredSessionsModel;
