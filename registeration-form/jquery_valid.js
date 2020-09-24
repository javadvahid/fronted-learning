$(function() {
    $("#firstname_error").hide();
    $("#lastname_error").hide();
    $("#cardid_error").hide();
    $("#cardidnum_error").hide();

    

    $("#firstname").keypress(function(){
        check("#firstname","#firstname_error");
         
    });
    $("#lastname").keypress(function(){
        check("#lastname","#lastname_error");
         
    });
    $("#cardid").keypress(function(){
        check("#cardid","#cardid_error","#cardidnum_error");
         
    });
    
    function check() {
        var inputlength = $(arguments[0]).val().length;
        var inputvalue = $(arguments[0]).val()
        if(inputlength < 3){
            $(arguments[1]).show();
        } else{
            $(arguments[1]).hide();
            
        }
        if($.isNumeric(inputvalue)){
            $(arguments[2]).hide();
        }   else {
            $(arguments[2]).show();
        } 
    }
    
})