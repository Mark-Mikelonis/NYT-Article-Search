var queryPreUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = "4a4c9d7e7660409eb1314808b3e2080a";
var queryUrl = "" ;
var keyWord = "";
var recordNumber;

var beginDate;
var endDate;
var link;

function buildQuery(){
	queryUrl = queryPreUrl + "?api-key=" + apiKey + "&q=" + keyWord;
	if($("#startYear").val()){
		queryUrl += "&begin_date=" + beginDate + "0101";
		console.log(beginDate);
	}
	if ($("#endYear").val()){
		queryUrl += "&end_date=" + endDate + "1231";
	}
	
	console.log(queryUrl);
	runQuery();
}
function runQuery() {
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        var results = response.response;

        for(var i=0;i<recordNumber;i++){
        	var headline = results.docs[i].headline.main;
        	var pubDate = results.docs[i].pub_date;
        	link = results.docs[i].web_url;
        	newCard = $("<div>");
        	newCard.addClass("card w-50");
        	newCardBody = $("<div>");
        	newCardBody.addClass("card-body");
        	newH5 = $("<h5>");
        	newH5.addClass("card-title");
        	newH5.text(headline);
        	newP = $("<p>");
        	newP.addClass("card-text");
        	newP.text(pubDate);
        	newA = $("<a>");
        	newA.attr("href", link);
        	newA.text(link);

        	newCardBody.append(newH5);
        	newCardBody.append(newP);
        	newCardBody.append(newA);
        	newCard.append(newCardBody);
        	$(".bodyContainer").append(newCard);

        }
        // $("#article-view").append("<p>" + response.response.docs[1].headline.main + "</p>");
    });
}
$(".searchBtn").on("click", function(element) {
    
    element.preventDefault();
    keyWord = $("#searchTerm").val().trim();
    recordNumber = $("#numberOfRecords").val();
    beginDate = $("#startYear").val().trim();
    endDate = $("#endYear").val().trim();
    buildQuery();
    console.log(keyWord);
    console.log(recordNumber);
    console.log(beginDate);
    console.log(endDate);
});
//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4a4c9d7e7660409eb1314808b3e2080a&page=0
$(".clearBtn").on("click", function(element){

	element.preventDefault();
})