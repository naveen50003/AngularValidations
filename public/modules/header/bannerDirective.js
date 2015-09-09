angular.module('headerModule').directive('cigyanBanner',function(){
    return{
        restirct:'AE',
        templateUrl:'modules/header/templates/banner.html',
        replace:true,
        scope:{
            bannerTitle:'@',
            bannerMessage:'@'
        },
        link:function(scope,element,attribute){
            
        },
        controller:function(){
            
        }
    }

});