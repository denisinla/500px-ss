$(document).ready(function(){
	var apiKey = "YnpJXu02wEwR6HVMuefDn76loEIY2O6KfoyEXKd0";
	var url = "https://api.500px.com/v1/photos?consumer_key="+apiKey+"&feature=popular";
	var objArray = [];
	var siteUrl = "http://www.500px.com/";
  $.getJSON(url, function(data){
		$.each(data.photos, function(i, photo){
					objArray.push(i+ ":" +photo);
					/*objArray.push('<article class="_item">');
					objArray.push('<a href='+siteUrl+''+photo.user.username+'>');
					objArray.push('<img src='+photo.image_url+' alt='+photo.user.fullname+' />');
					objArray.push('</a>');
					objArray.push('<div class="description">');
					objArray.push('<div class="twenty-two-pixels">')
					objArray.push('<i class="twenty-two-pixels icon-camera-retro"></i>');
					objArray.push('</div>');
					objArray.push('<div class="user">');
					objArray.push('<a href='+siteUrl+''+photo.user.username+'>'+photo.user.username+'</a>');
					objArray.push('</div>');
					objArray.push('</article>');
					$('<div/>',{"class":"_col",html: objArray.join("")}).appendTo("#spread");
					*/
					$("#spread").append(objArray.join(''));
					console.log("Set 1:"+ objArray);
		});
	});
});