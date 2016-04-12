var app = angular.module('QueryBuilder', ['ui.bootstrap', 'ui.bootstrap.datetimepicker','ui.grid']);

app.controller('mainController', function($scope, $http){
	
	$scope.refresh = false;
	$scope.gridData = [];
	var fromDate, toDate;
	var Where = function(column_name, operator, value, booleanOperator){
		
		this.column_name = column_name;
		this.operator = operator;
		this.value = value;
		this.booleanOperator = booleanOperator;
	}
	$scope.validateError = "";
	
	var selection = [];
	var whereSelection = [];
	$scope.booleanOperators = ['OR', 'AND'];
	$scope.relationalOperators = ['>', '<', '=','<=','>='];
	$scope.rows = [new Where('destination_ip','>',null, null)];
	$scope.columns = ['timestamp', 'destination_ip', 'destination_vn', 'direction_ingress', 
	                 'destination_port', 'protocol', 'source_ip', 'source_vn', 'source_port', 'sum_bytes_kb', 'sum_packets' ];
	
	  $scope.fromDate = new Date();
	  $scope.toDate = new Date();
	  $scope.format = "dd-MMM-yyyy";
	  
	  $scope.clicked = function(value,field){
		  
	      if(field == true){
	    	  selection.push($scope.columns[value]);
	      }
	      else{
	    	  if(!selection.length == 0){
	    		  var index = selection.indexOf($scope.columns[value]);
	    		  selection.splice(index,1);
	    	  }
	      }
	  }

$scope.validateWhereClause = function(option){
	var currentRow;
	for(var row in $scope.rows){
		currentRow = $scope.rows[row];
		if(row !=0 && currentRow.booleanOperator == null){
			$scope.errorMessage = true;
			return false;
		}
		if(currentRow.column_name == null || currentRow.operator == null || currentRow.value == null || currentRow.value.length == 0){
			$scope.errorMessage = true;
			return false;
		}
	}
	$scope.errorMessage = false;
	if(option == 1){
	$scope.rows.push(new Where('destination_ip','>',null, null));
	}
	
}

$scope.relationalOperatorsSelect = function(row,ro){
	row.operator = ro;
}

$scope.columnSelect = function(row,column){
	row.column_name = column;
}

$scope.booleanOperatorSelect = function(row,op){
	row.booleanOperator = op;
}

$scope.removeWhereClause = function(index){
	$scope.rows.splice(index,1);
}

$scope.validateAndSubmit = function(){
	if($scope.validateWhereClause(2) == false)
		return;
	var message = validateDataTypes();
	if(message == true){
		$scope.validateError = "";
		getData();
	}
	else
		$scope.validateError = message;
};

function getData(){
	
	$scope.gridData = [];
	$scope.refresh = true;
	$http.post('/fetchData', {'selection' : selection, 'rows' : $scope.rows, 'fromDate' : fromDate, 'toDate' : toDate}).success(function(response){
		
		$scope.refresh  = false;
		if(response.status == 200 )
			$scope.gridData = response.data;
		else
			$scope.gridData = [];
		
	});
}
function validateDataTypes(){
	
	var re = /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/
	fromDate = $scope.fromDate.getTime()*1000, toDate = $scope.toDate.getTime()*1000;
		if(fromDate > toDate)
			return "from Date cannot be greater than to Date";
		for(var row in $scope.rows){
		
		console.log("I have reached");
		if($scope.rows[row].column_name == 'destination_ip' || $scope.rows[row].column_name == 'source_ip'){
			console.log("I have reached as well");
			if(re.test($scope.rows[row].value) == false)
			return "Invalid "+$scope.rows[row].column_name;
		}
		if($scope.rows[row].column_name == 'direction_ingress'){
			console.log(Number($scope.rows[row].value));
				if(Number($scope.rows[row].value) != 0 && Number($scope.rows[row].value) != 1)
					return "must be 0 or 1";	
		}
		if($scope.rows[row].column_name == 'destination_port' || $scope.rows[row].column_name == 'source_port'){
			if(isNaN(Number($scope.rows[row].value)))
				return "Invalid "+$scope.rows[row].column_name;
			else if($scope.rows[row].value < 0 || $scope.rows[row].value > 65535)
				return $scope.rows[row].column_name+" must range between 0 and 65535";
			
		}
		if($scope.rows[row].column_name == 'protocol'){
			if(isNaN(Number($scope.rows[row].value)))
				return "Invalid protocol value";
		}
		if($scope.rows[row].column_name == 'sum_bytes_kb'){
			if(isNaN(Number($scope.rows[row].value)))
				return "Invalid sum_bytes_kb value";
		}
		if($scope.rows[row].column_name == 'sum_packets'){
			if(isNaN(Number($scope.rows[row].value)))
				return "Invalid sum_packets value";
		}
		
	}
	return true;
}

});


