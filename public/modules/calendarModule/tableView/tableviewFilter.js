angular.module('tableViewModule').filter('slice',function(){
    return function(events,start,end){
        if(events){
            var temp=[];
            for(var i=start;i<start+parseInt(end,10);i++){
                if(events[i]){
                    temp.push(events[i]);
                }
            }
            return temp;
        }
    }
});