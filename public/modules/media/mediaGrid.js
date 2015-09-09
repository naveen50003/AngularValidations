angular.module('mediaModule',[]).directive('cigyanMediaGrid',function(){
    return{
        restirct:'AE',
        templateUrl:'modules/media/templates/mediaGrid.html',
        replace:true,
        scope:{
            mediaData:'=',
            mediaType:'@'
        },
        link:function(scope,element,attribute){
            
        },
        controller:function(){
            
        }
    }

});