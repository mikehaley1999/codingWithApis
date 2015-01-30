$(function(){

  $.getJSON('http://www.omdbapi.com/?s=Twin%20Peaks&r=json', function(data){
  	myData = data.Search;
  	$.each(myData, function(index, value){
  		console.log(value.Title);
  	});
    
  });
});
