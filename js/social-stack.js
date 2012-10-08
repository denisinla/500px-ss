$(document).ready(function(){
	var url = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20json%20WHERE%20url%3D%22https%3A%2F%2Fapi.500px.com%2Fv1%2Fphotos%3Fconsumer_key%3DYnpJXu02wEwR6HVMuefDn76loEIY2O6KfoyEXKd0%26feature%3Dpopular%26image_size%3D3%22&format=json";
	var siteUrl = 'http://www.500px.com/';
    $.getJSON(url, function(data){
			$.each(data.query.results.json.photos, function(i, photo){
				var siteUrl = 'http://www.500px.com/';		
				var apiFlow = ['<div class="_col">'];
					for(var i=0; i<1; i++) 
						apiFlow.push('<article class="_item">');
						apiFlow.push('<a href='+siteUrl+''+photo.user.username+'>');
						apiFlow.push('<img src='+photo.image_url+' alt='+photo.user.fullname+' />');
						apiFlow.push('</a>');
						apiFlow.push('<div class="description">');
						apiFlow.push('<div class="twenty-two-pixels">')
						apiFlow.push('<i class="twenty-two-pixels icon-camera-retro"></i>');
						apiFlow.push('</div>');
						apiFlow.push('<div class="user">');
						apiFlow.push('<a href='+siteUrl+''+photo.user.username+'>'+photo.user.username+'</a>');
						apiFlow.push('</div>');
						apiFlow.push('</article>');
						$("#spread").append(apiFlow.join(''));
			});
		});	
});