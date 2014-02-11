$(document).ready(function(){
  var url = 'https://api.500px.com/v1/photos?consumer_key=[REMOVED]';
	var siteUrl = 'http://www.500px.com/';
    $.getJSON(url, function(data){
			$.each(data.photos, function(i, photo){
				var siteUrl = 'http://www.500px.com/';
				var apiFlow = ['<div class="_col">'];
					for(var i=0; i < 1; i++)
            var results = '<div class="_col">'+
						              '<article class="_item">'+
                          '<a href='+siteUrl+''+photo.user.username+'>'+
                          '<img src='+photo.image_url+' alt='+photo.user.fullname+' />'+
                          '</a>'+
                          '<div class="description">'+
                          '<div class="twenty-two-pixels">'+
                          '<i class="twenty-two-pixels icon-camera-retro"></i>'+
                          '</div>'+
                          '<div class="user">'+
                          '<a href='+siteUrl+''+photo.user.username+'>'+photo.user.username+'</a>'+
                          '</div>'+
                          '</article></div>';
            $("#spread").append(results);
			});
		});
});