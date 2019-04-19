
function setHeader(xhr) {

    xhr.setRequestHeader('Access-Control-Allow-Origin', "true");
  };
// this toggles the sidebar


$("#btn").on("click", function () {
    var movie = $(".form-control").val();
    var queryURL1 = "http://api.walmartlabs.com/v1/search?apiKey=v6r95ezj5d5rbhsjuvm8cuj5&lsPublisherId=v6r95ezj5d5rbhsjuvm8cuj5&query=  " + movie;
    event.preventDefault();
    $.ajax({
        url: queryURL1,
        method: "GET",
        crossDomain: true,
        dataType: 'jsonp',
        beforeSend: setHeader
    }).then(function (data) {
        // console.log(data);
        console.log(data.items[0].productUrl)
        // var newRow = $("<div>").append(
        //     $("<a>").html(),
            $("#movieInfo").prepend('<a id="link" href= ' + data.items[0].productUrl + ">Walmart" + "</a>");
            // $("<p>").text("Actors: " + response.Actors),
            // $("<p>").text("Genre: " + response.Genre),
            // $("<p>").text("Plot: " + response.Plot),
            // $("<p>").text("Released: " + response.Released),
            // $("<p>").text("IMD Rating: " + response.imdbRating),
            // $("#movieInfo").append("<p> -------------------</p>");
        // );
        // $("#walmart").prepend(newRow);
    });
  


    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=80085c73";
    event.preventDefault();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        // console.log("Title: " + response.Title);
        // console.log("Actors: " + response.Actors);
        // console.log("Genre: " + response.Genre);
        // console.log("Plot: " + response.Plot);
        // console.log("Released: " + response.Released);
        // console.log("IMD Rating: " + response.imdbRating);


        var newRow = $("<div>").append(

            $("<p>").text("Title: " + response.Title),
            $("<p>").text("Actors: " + response.Actors),
            $("<p>").text("Genre: " + response.Genre),
            $("<p>").text("Plot: " + response.Plot),
            $("<p>").text("Released: " + response.Released),
            $("<p>").text("IMD Rating: " + response.imdbRating),
            
            $("<br>"),
            $("<hr>")
        );
        $("#movieInfo").prepend(newRow);


    });

});






