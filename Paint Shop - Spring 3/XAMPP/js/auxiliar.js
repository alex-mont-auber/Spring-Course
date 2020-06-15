
// -- LIST CREATORS AUXILIAR FUNCTIONS START -- \\

function shopList(data) 
{
    document.getElementById('allShops').innerHTML="";

    let ul = document.createElement('ul');

    for(let e in data) // array's lector
    {
        let li = document.createElement('li');

        ul.appendChild(li);
        li.appendChild += data;

        document.getElementById("allShops").appendChild(ul);

        li.innerHTML = "Shop: " + data[e].shopName + ", ID: " + data[e].shopId + "<button type='submit' onclick='showPaints()'>Show Paints</button><div id='paintListForShop'></div>";
    }
}

function paintList(data) 
{
    document.getElementById("paintListForShop").innerHTML = ""
      
    let ul = document.createElement('ul');

    for(let e in data) // array's lector
    {
        let li = document.createElement('li');

        ul.appendChild(li);
        li.appendChild += data;

        document.getElementById("paintListForShop").appendChild(ul);

        li.innerHTML = "Name Paint: <strong>" + data[e].paintName +  "</strong>, Name Author: <strong>" + data[e].authorName + "</strong>, Price: <strong>" + data[e].price + "</strong>, Date Enter Shop: " + data[e].dateEnterShop;
    }
}

// -- LIST CREATORS AUXILIAR FUNCTIONS END -- \\

// -- RANDOM IMAGE AUXILIAR FUNCTION START -- \\

function randomPaintElection()
{
    let randomPaintElection = Math.floor(Math.random() * 6) + 1;

    if(randomPaintElection === 1)
    {
        $("#paintText").append("The sister of gioconda");
        $("#paint").attr("src", "img/lagioconda.jpg");
        $("#paint").attr("alt", "La-Gioconda-image");
    }
    else if(2)
    {
        $("#paintText").append("An absurd union of all the elements of Bryan's Life");
        $("#paint").attr("src", "img/lifeofbryaneccehomo.jpg");
        $("#paint").attr("alt", "Life-of-Bryan-Ecce-Homo-image");
    }
    else if(3)
    {
        $("#paintText").append("Mars eaten bella-easo muffins in beach");
        $("#paint").attr("src", "img/marseatingherchildrens.jpg");
        $("#paint").attr("alt", "Mars-Eating-Muffins-in-beach-image");
    }
    else if(4)
    {
        $("#paintText").append("Simple silly fool cowboy beaten");
        $("#paint").attr("src", "img/pictureoldwestbandit.jpg");
        $("#paint").attr("alt", "We-dont-know-how-is-maybe-an-bandit-in-western-image");
    }
    else if(5)
    {
        $("#paintText").append("Girl with White Collar's pearl");
        $("#paint").attr("src", "img/thegirlwiththepearl.jpg");
        $("#paint").attr("alt", "girl-with-a-pearl-image");
    }
    else
    {
        $("#paintText").append("The screaming painting in beach");
        $("#paint").attr("src", "img/thescream.jpg");
        $("#paint").attr("alt", "The-scream-image");
    }
}

// -- RANDOM IMAGE AUXILIAR FUNCTION END -- \\

// -- SET ID INPUT AUXILIAR FUNCTION START -- \\

function setIdInput()
{
    $.ajax({
        type:'GET',
        url: url + '/shops',
        contentType:'application/json',
        success: function(data)
        {
            for(let e in data)
            {
                if( $('#shopSelection').val() === data[e].shopName || $('#az5ShopSelection') === data[e].shopName) 
                {
                idShopInput = data[e].shopId;
                }
            }
        }
    })
   // return idShopInput;
}

  // -- SET ID INPUT AUXILIAR FUNCTION END -- \\