var dao = require('./DAO');

exports.index = function(req, res){
  res.render('index');
};

exports.fetchData = function(req, res){
	var selection = req.body.selection,
	rows = req.body.rows,
	fromDate = req.body.fromDate,
	toDate = req.body.toDate;
	
	 dao.fetch(selection, rows, fromDate, toDate, function(message){
		 res.send(message); 
	 });
	};