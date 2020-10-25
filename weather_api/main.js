$(document).ready(function(){
    $('#submit-weather').click(function(){

        var city = $('#name').val();
        if(city != ''){
            $('#error').html('');
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric" + "&APPID=4bd7d1c8eb20d85732f9235d04880760",

                type:"GET",
                dataType:"json",
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
    return "<h1>Current Weather of "+ data.name+", "+ data.sys.country +"</h1>"+
           "<h2><strong>Weather</strong>: "+ data.weather[0].main +"</h2>"+
           "<h2><strong>description</strong>: "+ data.weather[0].description +"</h2>" + 
           "<h2><strong>temperature</strong>: "+ data.main.temp +"</h2>" +
           "<h2><strong>pressure</strong>: "+ data.main.pressure +"</h2>"+
           "<h2><strong>Humidity</strong>: "+ data.main.humidity  +"</h2>"
        }