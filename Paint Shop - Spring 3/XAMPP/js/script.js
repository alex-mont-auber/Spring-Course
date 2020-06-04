        // --- + TABS FUNCTION + --- \\

/* Functions for work of table from w3schools*/

function openTab(evt, cityName) 
{

    // Variables

  var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) 
  {
    tabcontent[i].style.display = "none";
  }

    // Get all elements with class="tablinks" and remove the class "active"

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) 
  {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

    // Show the current tab, and add an "active" class to the button that opened the tab

  document.getElementById(cityName).style.display = "block";
  
  evt.currentTarget.className += " active";
} 

        // --- + AJAX + --- \\

  // Create Shop function 

  const url = "http://localhost:8080"

function createShop()
{
  var sendInfo = 
  {
    shopName: $('#newNameShop').val() //Give data from input
  };

  $.ajax({ // Create shop AJAX Post
    type:'POST',
    url:url + '/shops',
    data: JSON.stringify(sendInfo),
    contentType: 'application/json',
    success: function(sendInfo)
    {
      document.getElementById('showNewShop').innerHTML = "<p>New Employee created! Name: <strong>" + sendInfo.shopName + "</strong> We will apply the taxes stipulated in the contract signed White Collar Company. Pict...sorry, Collar's taxes included. More info -> Click 'List of Shops'";
      console.log(sendInfo);
    },
    error: function(error)
    {
      console.log(error);
    }
  });
}

function showAllShops() 
{
  $.ajax({
    type:'GET',
    url: url + '/shops',
    contentType: 'application/json',
    success: function(data)
    {
      document.getElementById('allShops').innerHTML="";
      let ul = document.createElement('ul');
      for(let e in data) // array's lector
      {
          let li = document.createElement('li');

          ul.appendChild(li);
          li.appendChild += data;

          document.getElementById("allShops").appendChild(ul);

          li.innerHTML = "Shop: " + data[e].shopName + ", ID: " + data[e].shopId;
      }
    }
  })
}

