$(document).ready(function(){
	var apiKey = "YnpJXu02wEwR6HVMuefDn76loEIY2O6KfoyEXKd0";
	var apiLoad = "https://api.500px.com/v1/photos?consumer_key="+apiKey+"&feature=popular";
	var siteUrl = "http://www.500px.com/";
	$.ajax({
		type: 'GET',
		url: apiLoad,
		datatype: 'json',
		success: function(data){
			$.each(data.photos, function(index, element){
				$('<div/>')
				.addClass('_col')
				.append($('<img/>').attr({src:element.image_url,alt:element.name}))
				.appendTo('#spread');
			});
		}
	});
});