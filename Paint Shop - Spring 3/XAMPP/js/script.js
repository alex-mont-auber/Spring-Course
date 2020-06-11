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

          li.innerHTML = "Shop: " + data[e].shopName + ", ID: " + data[e].shopId + "<button type='submit' onclick='showPaints()'>Show Paints</button>";
      }

      document.getElementById("shopSelection").innerHTML = ""; 

      for(let i in data)
      {
        let option = document.createElement('option');

        let select = document.getElementById('shopSelection').appendChild(option);

        option.appendChild += data;

        document.getElementById('shopSelection').appendChild(select);

        option.innerHTML = data[i].shopName;
        console.log(data[i].shopName);
      }
    }
  })
}

// This function create all paint information, and send to server, name, date, author, price, and extra information.

function createPaint() 
{

  // Var for compare the ID of data from real input ID

  // Variable for create the date.

  var idShopInput; 

  let actualDate = new Date();

  // Random Paint Election

  function randomPaintElection()
  {
    let randomPaintElection = Math.floor(Math.random() * 6) + 1;

    if(randomPaintElection === 1)
    {
      $("#paint").attr("src", "img/lagioconda.jpg");
      $("#paint").attr("alt", "La-Gioconda-image");
    }
    else if(2)
    {
      $("#paint").attr("src", "img/lifeofbryaneccehomo.jpg");
      $("#paint").attr("alt", "Life-of-Bryan-Ecce-Homo-image");
    }
    else if(3)
    {
      $("#paint").attr("src", "img/marseatingherchildrens.jpg");
      $("#paint").attr("alt", "Mars-Eating-Muffins-in-beach-image");
    }
    else if(4)
    {
      $("#paint").attr("src", "img/pictureoldwestbandit.jpg");
      $("#paint").attr("alt", "We-dont-know-how-is-maybe-an-bandit-in-western-image");
    }
    else if(5)
    {
      $("#paint").attr("src", "img/thegirlwiththepearl.jpg");
      $("#paint").attr("alt", "girl-with-a-pearl-image");
    }
    else
    {
      $("p").appendChild("The screaming painting in beach");
      $("#paint").attr("src", "img/thescream.jpg");
      $("#paint").attr("alt", "The-scream-image");
    }
  }

  // AJAX doit for compare information.

  $.ajax({
    type:'GET',
    url: url + '/shops',
    contentType:'application/json',
    success: function(data){
      for(let e in data)
      {
        if( $('#shopSelection').val() === data[e].shopName) 
        {
          idShopInput = data[e].shopId;
        }
      }
    }
  })
  
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
    success: function(){
        document.getElementById('showNewPaintImage').innerHTML = "<img id='paint' alt=''>";
        document.getElementById('showNewPaintText').innerHTML = '<p></p>';
        randomPaintElection();
    }
  })
}


/* BUILDING
function showPaints(){
  $.ajax({
    type:'GET',
    url: url + '/shops',
    contentType:'application/json',
    success: function(data){
      
    }
  })
}*/