var getWNAPI = (function(){

  var apiKey = "[api]";
  var xhr = new XMLHttpRequest();
  var url = 'https://api.500px.com/v1/photos?consumer_key='+apiKey;

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){

      if(xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText);

        console.log("Data:" + data.photos);

        // finish up ...
      }
    }
    xhr.send(null);
})();

WebFont.load({
  google: {
    families: ['Open+Sans:300,400,600,700,800', 'Gentium+Book+Basic:400,400italic']
  },
  custom:{
    familes: ['FontAwesome'],
    urls: ['//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css']
  }
});