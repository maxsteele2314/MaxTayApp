var moviePromise = d3.json("https://ghibliapi.herokuapp.com/films");

var createBanner = function(message)
{
    d3.select(".banner").text(message);
}

var movieTitles = function(movieData)
{
    d3.select(".titles")
    .append("ul")
    .selectAll("li")
    .data(movieData)
    .enter()
    .append("li")
    .text(function(d) { return d.title })
    .on("click", function(d) { getData(d) });
}

var getData = function(movie)
{
    d3.select(".data *").remove("ul");
    d3.select(".data").append("div").attr("class", "info");
    d3.select(".info").append("ul").attr("class", "infoList");
    d3.select(".infoList").append("li").text(movie.producer);
    d3.select(".infoList").append("li").text(movie.director);
    d3.select(".infoList").append("li").text(movie.rt_score);
    d3.select(".infoList").append("li").text(movie.description);
}

moviePromise.then(
function(movieData)
{
    createBanner("Movies");
    movieTitles(movieData);
    console.log("movieData", movieData);
},
function(err)
{
    createBanner("Loading Failed");
    console.log(err);
});