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

        // --- + AJAX START + --- \\

  // Variables for general usage AJAX:

  const url = "http://localhost:8080";

  var idShopInput; 

  // Create Shop function 

function createShop()
{
  var sendInfoShop = 
  {
    shopName: $('#newNameShop').val() //Give data from input
  };

  $.ajax({ // Create shop AJAX Post
    type:'POST',
    url:url + '/shops',
    data: JSON.stringify(sendInfoShop),
    contentType: 'application/json',
    success: function()
    {
      document.getElementById('showNewShop').innerHTML = "<p>New Shop created! Name: <strong>" + sendInfoShop.shopName + "</strong> We will apply the taxes stipulated in the contract signed White Collar Company. Pict...sorry, Collar's taxes included. More info -> Click 'List of Shops'";
    },
    error: function(error)
    {
      console.log(error);
    }
  });
}

// Show All Shops function

function showAllShops() 
{
  $.ajax({
    type:'GET',
    url: url + '/shops',
    contentType: 'application/json',
    success: function(data)
    {
      shopList(data);
      
      document.getElementById("shopSelection").innerHTML = ""; 
      document.getElementById("az5ShopSelection").innerHTML = ""

      for(let i in data)
      {
        let option = document.createElement('option');

        let select = document.getElementById('shopSelection').appendChild(option);
        let select2 = document.getElementById('az5ShopSelection').appendChild(option);

        option.appendChild += data;

        document.getElementById('shopSelection').appendChild(select);
        document.getElementById('az5ShopSelection').appendChild(select2);

        option.innerHTML = data[i].shopName;
        console.log(data[i].shopName);
      }
    }
  })
}

// This function create all paint information, and send to server, name, date, author, price, and extra information.

function createPaint() 
{
  // Variable for create the date.

  let actualDate = new Date();

  // Call auxiliar function

  setIdInput();
  
  // Info for transfer to Server JSON format

  var sendInfoPaint = 
  {
    shopId: idShopInput,
    paintName: $('#newNamePaint').val(),
    authorName: $('#newAuthorPaint').val(),
    price: $('#newPricePaint').val(),
    dateEnterShop: actualDate
  };

  // AJAX for create paints and extra info.
  
  $.ajax({
    type:'POST',
    url: url + '/shops/'+ idShopInput + '/paints',
    data: JSON.stringify(sendInfoPaint),
    contentType:'application/json',
    success: function()
    {
        document.getElementById('showNewPaintImage').innerHTML = "<img id='paint' alt=''>";
        document.getElementById('showNewPaintText').innerHTML = '<p id="paintText"></p>';

        randomPaintElection(); // Auto select extra info in auxiliar function
    }
  })
}

// Function for show Paints depending of shop

function showPaints()
{
  setIdInput(); // Auto compare and return correct id info.

  $.ajax({
    type:'GET',
    url: url + '/shops/' + idShopInput + '/paints',
    contentType:'application/json',
    success: function(data)
    {
      paintList(data);
    }
  })
}

/*
function az5RedButton() 
{

  setIdInput();

  $.ajax({
    type:'DELETE',
    url: url + '/shops/' + idShopInput + '/paints',
    contentType:'application/json',
    success: function(data)
    {
      for(let e in data) {
        document.getElementById("paintListForShop").innerHTML = "";
        document.getElementById("paintListForShop").innerHTML = "Nothing to see here :)";
      }
    }
  })
}*/
        // --- + AJAX END + --- \\