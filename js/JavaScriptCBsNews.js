// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=0c899daa37584ae697bcb51939a023bc', true);

request.onload = function () {
  // Begin accessing JSON data here

        var data = JSON.parse(this.response);
        console.log(data.articles.length);

        for (var i = 0; i < data.articles.length; i++) {


        document.getElementById("root").innerHTML += "Author:  " + data.articles[i].author+"<br>";
        document.getElementById("root").innerHTML += "Author:  " + data.articles[i].publishedAt+"<br>";
        document.getElementById("root").innerHTML += "Title de Artikels:  " + data.articles[i].title+"<br>";
        document.getElementById("root").innerHTML += "Beschreibung:  " + data.articles[i].description+"<br>";
        document.getElementById("root").innerHTML += "URL zur haubt Seite:  " + data.articles[i].url+"<br>";
        document.getElementById("root").innerHTML += "URL zum Bild des Artikels:  " + data.articles[i].urlToImage+"<br>";
        document.getElementById("root").innerHTML += "Artikel:  " + data.articles[i].content+"<br><br>";

    //Do something
      }
}


// Send request
request.send();
