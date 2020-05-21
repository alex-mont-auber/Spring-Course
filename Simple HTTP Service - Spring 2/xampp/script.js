// AJAX CREATE/POST Employees/ Companions

const url = "http://localhost:8080";

var idToModify = $('#employeeToModify').val(); 

var idToModifyUrl = parseInt(idToModify);

var idToDelete = $('#employeeToDelete').val();

function getSalary()
{
    switch($('#workSelection').val())
    {
        case "Warrior":
           return salary = 30;
           break;
        case "Burglar":
            return salary = 10;
            break;
        case "Thief":
            return salary = 50;
            break;
        case "Archer":
            return salary = 40;
            break;
        case "Mage":
            return salary = 45;
            break;
        case "Berserk":
            return salary = 35;
            break;
        case "Sentinel":
            return salary = 20;
            break;
    }
}

function createEmployees()
{

    var sendInfo = 
    {
        name: $('#nameEmployee').val(),
        role: $('#workSelection').val(), 
        salary: getSalary()
    };

    $.ajax({
        type:'POST',
        url:url +'/employees',
        data: JSON.stringify(sendInfo),
        contentType: 'application/json',
        success: function(sendInfo, response)
        {
            document.getElementById('showNewEmployee').innerHTML = "<p>New Employee created! Name: <strong>" + sendInfo.name + "</strong>, Role: <strong>" + sendInfo.role + "</strong>. We will apply the salary stipulated in the contract signed with FotR Company. Sauron taxes included. More details -> Click 'Show Companions'";
            console.log(sendInfo);
        },
        error: function(error)
        {
            console.log(error);
        }
    });
}

// AJAX GET Employees/Companions with list

function getEmployees()
{
    $.ajax
    ({
        type: 'GET',
        url: url + '/employees',
        success: function(data)
        {
            console.log(data); // Object's array
             // Auto create Unordened List with List elements
            document.getElementById("showEmployeesList").innerHTML = ""; 

            let ul = document.createElement('ul');
            for(let e in data) // array's lector
            {
                let li = document.createElement('li');

                ul.appendChild(li);
                li.appendChild += data;

                document.getElementById("showEmployeesList").appendChild(ul);

                li.innerHTML = "ID: " + data[e].id + ", Name: " + data[e].name + ", Role: " + data[e].role + ", Salary:  "+ data[e].salary + " gold.";
            }
        },
        error: function()
        {
            console.log("Error to get info from Spring or AJAX not work");
        }
    });
};

// AJAX PUT/PATCH Employee:

    // how work: First read the user's input, and transform to number, after, do a loop of data to find the same ID, if user's id exists, change all content of div for an inputs an select panel for modify data of the selected ID. After, change Data with desires of user, and save the changes with PUT in another independent function.

function checkEmployee()
{

    $.ajax({
        type:'GET',
        url: url + '/employees',
        headers:{
            'Allow-Access-Allow-Origin':'*'
        },
        success:function(data)
        {
            for(let e in data)
            {
                if(data[e].id === idToModifyUrl)
                {
                    console.log("True! " + data[e].id + " = " +  idToModifyUrl);

                    document.getElementById("modifyEmployeeBox").innerHTML = "";

                    document.getElementById("selectedId").innerHTML = "ID Selected: " + idToModifyUrl + ", Current Data: " + data[e].name + ", " + data[e].role;

                    document.getElementById("modifyEmployeeBox").innerHTML = '<input type="text" id ="nameEmployeeToModify" placeholder="New name here"> <select id="workModified" name="modified Work"><option value="Warrior">Warrior</option><option value="Burglar">Bugglar</option><option value="Thief">Thief</option><option value="Archer">Archer</option><option value="Mage">Mage</option><option value="Berserk">Berserk</option><option value="Sentinel">Sentinel</option></select> <button type="submit" onclick="modifyEmployee()">Save Modifications</button> <button onclick="location.reload()">Back</button>';
                } 
                else if (data[e].id !== idToModifyUrl)
                {
                    console.log("Cheking in list ID: " + data[e].id + ", input/user ID: " + idToModifyUrl + " doesn't match/exist!");
                }
            }
        },
        error: function(error)
        {
            console.log(error);
        }
    });
}

// AJAX MODIFY EMPLOYEE

function modifyEmployee()
{
   var modifiedInfo = { 
       name:$("#nameEmployeeToModify").val(),
       role: $("#workModified").val(), 
       salary: getSalary()
    };

    $.ajax({
        type:'PUT',
        url: url + '/employees/' + idToModify, 
        data: JSON.stringify(modifiedInfo),
        contentType: 'application/json',
        success: function(modifiedInfo)
        {
            console.log("New info: ID: " + modifiedInfo.id + ", Name: " + modifiedInfo.name + ", Role: " + modifiedInfo.role);
        },
        error: function(response)
        {
            console.log("Error to modify employee, review your AJAX Code/Spring, Error log: " + response);
        }
    });
}

// AJAX DELETE EMPLOYEE

function deleteEmployee(data)
{

    $.ajax({
        type:'DELETE',
        url: url + '/employees/' + idToDelete,
        contentType: 'application/json',
        success:function()
        { 
        console.log("Delete Enter, check data info");
 
        },
        error:function()
        {
            console.log("Error to delete employee, review AJAX/Spring Code");
        }
    });
}