
$(document).ready(function() {
  var canvas = $("#myCanvas")[0];
  var ctx = canvas.getContext("2d");
  var img = new Image();        //create the image object
  img.src = "_images/IndexPage.PNG";         //load the image
   
  
  img.onload = function() {
    ctx.drawImage(img, 0, 0, 1250, 480);    //draw the image
  };
  
  
  
  
  
  //$("#provinces").collapsible("refresh");
});

