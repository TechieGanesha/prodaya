(function(){

	var button = document.getElementById('cn-button2'),
    wrapper = document.getElementById('cn-wrapper2');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav2');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav2');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav2');
	}

})();
