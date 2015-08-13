$(document).ready(function(){
  $("#slideshowdiv").css("overflow","hidden");
  $("ul#slides").cycle({
     fx:'fade',
	 pause:1,
	 prev:'#prev',
	 next:'#next'
	 });
  $("#slideshowdiv").hover(function(){
      $("ul#nav").fadeIn();
	  },function(){
	  $("ul#nav").fadeOut();
	  });
	  });
	  
	 