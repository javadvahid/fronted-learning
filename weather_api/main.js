$(document).ready(function(){
    $('#submit-weather').click(function(){

        var city = $('#name').val();
        if(city != ''){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric" + "&APPID=4bd7d1c8eb20d85732f9235d04880760",

                type:"GET",
                dataType:"jsonp",
                success: function(data){
                    console.log(data);
                    var widget = show(data);
                    $("#show").html(widget);
                    $('#name').val(''); 
                }
            })
        }else{
            $('#error').html('Field cant be empty'); 
        }
    });
    
});

function show(data){
    return "<h2><strong>Weather</strong>: "+ data.weather[0].main +"</h2>"+
           "<h2><strong>Weather</strong>: "+ data.weather[0].description +"</h2>";
}