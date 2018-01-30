
var queryPreURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "4a4c9d7e7660409eb1314808b3e2080a";
var queryURL;

var params = [];

var keyWord = ["Net Neutrality"];
var pubDate;
var beginDate;
var endDate;
var link;
 

$.ajax({
	url: queryPreURL + "?api-key=" + apiKey + "&q=" + keyWord,
	method: "GET"
}).done(function(response){
	console.log(response);
	$("#article-view").append("<p>" + response.response.docs[1].headline.main + "</p>");


});


//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4a4c9d7e7660409eb1314808b3e2080a&page=0
