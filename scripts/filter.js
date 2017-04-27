app.filter('regexp', function(){
    return function(input){
        return input.match(/\/Date\(([0-9]*)\)\//)[1];
    };
});