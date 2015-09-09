angular.module('morebooksModule').filter('slice',function(){
    return function(books,start,end){
        if(books){
            var temp=[];
            for(var i=start;i<start+parseInt(end,10);i++){
                if(books[i]){
                    temp.push(books[i]);
                }
            }
            return temp;
        }
    }
});