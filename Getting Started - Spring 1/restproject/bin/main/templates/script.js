/*function GeetingStarted(){

    var id = '#inputTexto'; 
    let link = "http://localhost:8080";
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/greetings",
        success: function(){
            console.log("Entra!");
            alert("Hello World");
        },
        error: function ErrorException(){
            console.log("Error to get info from Spring or AJAX not work");
        }
    });
};

function GeetingStarted(){

    var id = '#inputTexto'; 
    //let link = "http://localhost:8080";
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/greetings",
        success: function(orders){
            //console.log("Entra!");
            //alert("Hello World");
             $.each(orders, function(i, order) {
                 $orders.append(template + name);
             })
        }
    });
};


$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/greetings",
        success: console.log("JSON WORK!")
    }).then(function(data) {
       $('.inputText').append(data.id);
       $('.inputText').append(data.content);
    });
});*/