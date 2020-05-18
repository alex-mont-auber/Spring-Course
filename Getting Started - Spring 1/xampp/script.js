function test(){

    var input = document.getElementById("inputText").value; 

    $.ajax({
        type: 'GET',
        url:'http://localhost:8080/greetings',
        success: function(id){
            console.log("Entra!");
            console.log("Hello " + input + "!")
            alert("Hello " + input + ", inside JSON have: " + id);
        },
        error: function(id){
            console.log("Error to get info from Spring or AJAX not work");
        }
    }).then(function(data){
        console.log(data.id);
        console.log(data.content);
        document.getElementById("jsonId").innerHTML = "ID: " + data.id;
        document.getElementById("jsonContent").innerHTML = "Content: " + data.content;
    });
};