angular.module('paginationModule',[]).directive('cigyanPagination',function(){
    return{
        restirct:'AE',
        templateUrl:'modules/pagination/templates/pagination.html',
        replace:true,
        scope:{
        	currentpl:'=',
        	cpno:'=',
        	pagNoArray:'='
        },
        link:function(scope,element,attribute){
			
			var rem;
			var i = 0;
			var morePagesFlag = 1;
			var currentNoOfPages = 0;
			scope.totalNoPages;
			scope.cpno = 0;
			scope.currentpl = '10';



			scope.range = function(){
	            scope.pagNoArray = [];
	            if(attribute.total)
	            {
	                scope.totalNoPages = Math.ceil(attribute.total/scope.currentpl);
	                var start = scope.cpno;
	                currentNoOfPages = 0;
	                if(scope.totalNoPages < 10 && scope.totalNoPages > 0)
	                {
	                    currentNoOfPages = scope.totalNoPages;
	                }
	                else
	                {
	                    currentNoOfPages = 10;
	                }
	                for(i = 0;i< currentNoOfPages;i++){
	                    scope.pagNoArray.push(i+1);
	                }
	            }
	        }     
	        	scope.pagNoArray = [];
				rem = attribute.total % scope.currentpl;
	            if(attribute.total)
	            {
	                scope.totalNoPages = Math.ceil(attribute.total/scope.currentpl);
	                var start = scope.cpno;
	                currentNoOfPages = 0;
	                if(scope.totalNoPages < 10 && scope.totalNoPages > 0){
	                    currentNoOfPages = scope.totalNoPages;
	                }
	                else{
	                    currentNoOfPages = 10;
	                }
	                for(i = 0;i< currentNoOfPages;i++){
	                    scope.pagNoArray.push(i+1);
	                }
	            }

	        /*-----keeps track of change in page length value and evalute required values*/
        	scope.$watch('currentpl',function(newValue,oldValue){
        		if(newValue!==oldValue){
        			scope.currentpl = newValue;
        			scope.range();
        			rem = attribute.total % scope.currentpl;
        		}
        	},true);
    
	        //onclick of corresponding page numbers this function will execute
	        scope.goToPage = function(index)
	        {
	            scope.cpno = scope.currentpl * (index - 1);
	            scope.selected = index;
	            morePagesFlag = index;
	        }

	        /*------for making page number active and deactive------*/
	        scope.isActive = function(item) {
	           return scope.selected === item;
	        }


	        /*click on full previous button*/
	        scope.startPage = function(){
	            scope.cpno = 0;
	            scope.updateArray(100);
	        }
	        
	        /*click on full end button*/
	        scope.endPage = function(){
	            scope.cpno = attribute.total - rem;
	            if(scope.totalNoPages>=10){
	                scope.updateArray(-100);
	        	}
	        }

	        /* pevious page click funtion*/
	        scope.prev = function(){
	            if(scope.cpno > 0){
	                scope.cpno = scope.cpno - scope.currentpl;
	            }
	            else{
	                scope.cpno = 0;   
	            }
	            console.log(scope.cpno);

	            if(morePagesFlag > 1)
	            {
	                morePagesFlag--;
	            }
	            else{
	                morePagesFlag = 1;
	            }


	            if(morePagesFlag < scope.pagNoArray[0]){
	                scope.updateArray(-1);
	            }
	        }

	        /*next page click funtion*/
	        scope.next = function(){

	            if(scope.cpno < attribute.total - rem){
	                scope.cpno = scope.cpno + parseInt(scope.currentpl,10);
	            }
	            else{
	                scope.cpno = scope.cpno - scope.currentpl;
	                scope.cpno = attribute.total - rem; 
	            }



	            if(morePagesFlag < ((scope.cpno/scope.currentpl)+1))
	            {
	                morePagesFlag++;
	            }
	            else{
	                morePagesFlag = (scope.cpno/scope.currentpl)+1;
	            }


	            if(morePagesFlag > scope.pagNoArray[scope.pagNoArray.length-1]){
	                scope.updateArray(1);
	            }
	        }

	        /*---------updates pagination arary values-------*/
	        scope.updateArray = function(key){
	            if(key == 100){
	                for(i = 0; i< scope.pagNoArray.length; i++)
	                {
	                    scope.pagNoArray[i]=i+1;
	                    // alert("100");
	                }
	            }
	            else if(key == -100){
	                var j = 9;
	                var bufferTotalNoOfPages = scope.totalNoPages;
	                // console.log(scope.totalNoPages);
	                for(i = scope.totalNoPages; i > (scope.totalNoPages-10); i--)
	                {
	                    scope.pagNoArray[j] = bufferTotalNoOfPages--;
	                    j--;
	                    // alert("-100");
	                }
	            }
	            else{
	                for(i = 0; i< scope.pagNoArray.length; i++)
	                {
	                    scope.pagNoArray[i]=scope.pagNoArray[i]+key;
	                }
	            }
	        }
    	}
	}
});