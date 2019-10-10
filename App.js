
var createBanner = function(message)
{
   d3.select("#banner")
    .text(message)
}

var moviePromise = d3.json("https://ghibliapi.herokuapp.com/films")
    moviePromise.then(
             function(films)
        {
            createBanner("Studio Ghibli Films")
        },
             function(Error)
        { 
            createBanner("No Movies Here")
        }
    )

var movieTitles = function(films)
{
    d3.select("#title")
      .selectAll("p")
      .data(films)
      .enter()
      .append("p")
    
}
