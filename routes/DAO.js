var mysql = require('mysql');
var con = require('./connections');

function connectDB(){
	  var connection = mysql.createConnection(con.connectionString);
	  
connection.connect(function (err) {
	        if (err) { throw err; }
	    });
	    return connection;
}

exports.fetch = function(selection, rows, fromDate, toDate, callback){
	var select = "select";
	  var from = "from";
	  var tableName = "traffic_flow";
	  var all = "*";
	  var where = "where";
	  var between = "between";
	  var and = "and";
	  var or = "or";
	  var query = "";
	  var timestamp = "timestamp";
	  var between = "between"
	  
	  if(selection.length == 0)
		  query = select+" "+all+" "+from+" "+tableName+" "+where;
	  else
		  query = select+" "+selection.join()+" "+from+" "+tableName+" "+where;
	  
	  query = query+" "+timestamp+" "+between+" "+fromDate+" "+and+" "+toDate;
	  
	  
	if(rows.length !=0){
		query = query+" "+and;
		for(var row in rows){
			var condition = rows[row];
			if(condition.booleanOperator != null)
				query = query+" "+condition.booleanOperator+" "+condition.column_name+" "+condition.operator;
			else
				query = query+" "+condition.column_name+" "+condition.operator;
			
			if(typeof condition.value === 'string')
				query = query +" '"+condition.value+"'";
			else
				query = query +" "+condition.value;
		}
		
	}
	
	var connection = connectDB();
	
	connection.query(query, function (err, rows, fields) {
		if(err)
			throw err;
      if(rows.length >0)
    	  	callback({status : 200, data : rows});
    	  else
    		callback({status : 400, data : "No rows"});  
      
      connection.end();
      
    });
	
	
}