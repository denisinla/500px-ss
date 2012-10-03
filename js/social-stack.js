$(document).ready(function(){
	var url = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20json%20WHERE%20url%3D%22https%3A%2F%2Fapi.500px.com%2Fv1%2Fphotos%3Fconsumer_key%3DYnpJXu02wEwR6HVMuefDn76loEIY2O6KfoyEXKd0%26feature%3Dpopular%26image_size%3D3%22&format=json";
	var siteUrl = 'http://www.500px.com/';
    $.getJSON(url, function(data){
		$.each(data.query.results.json.photos, function(i, photo){
			$("#spread").append("<div class='_col'><article class='_item'><a href="+siteUrl+""+photo.user.username+"><img src="+photo.image_url+" alt='Posted by: "+photo.user.fullname+"' /></a><p><a href="+siteUrl+""+photo.user.username+" class='light'>"+photo.user.fullname+"</a></p></article></div>");
		});
	});
});