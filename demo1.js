(function(){

	var button = document.getElementById('cn-button1'),
    wrapper = document.getElementById('cn-wrapper1'),
    overlay = document.getElementById('cn-overlay1');

	//open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();//so that it doesn't trigger click event on document

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
	    button.innerHTML = "-";
	    classie.add(overlay, 'on-overlay1');
	    classie.add(wrapper, 'opened-nav1');
	}
	function closeNav(){
		open = false;
		button.innerHTML = "+";
		classie.remove(overlay, 'on-overlay1');
		classie.remove(wrapper, 'opened-nav1');
	}
	document.addEventListener('click', closeNav);

})();

