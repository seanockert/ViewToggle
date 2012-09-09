/*
* ViewToggle v.0.1.  
* (c) 2012: Sean Ockert, http://seanockert.github.com/ViewToggle/README.md 
* Provides a way to toggle full-site/mobile view on a responsive design
*/
ViewToggle = (function (window) { 

	var button = document.getElementById('viewtoggle'); // Apply an ID 'viewtoggle' to the button

	if (document.all && !document.querySelector) {
		button.parentNode.removeChild(button); // Remove the link if IE 7 or lower
	}

	var viewtoggle = {},
	labelFull = button.innerHTML, // Full Site label is the default
	labelMobile = 'View mobile site', // Label to return to the mobile view
	refresh = false, // Set this to true to force the page to refresh after the button is pressed. Use if you need to load background images that are defined in a different media query
	fullwidth = 980, // Full site page width
	viewport = document.querySelector("meta[name=viewport]"),
	mobile = true;

	viewtoggle = {
		load: function () {
			localStorage.isResponsive = (localStorage.isResponsive === undefined) ? 'true' : localStorage.isResponsive; // Check for stored variable 
			
			if (localStorage.isResponsive === 'false') {
				viewtoggle.showFull();
			}
			
			// Bind <a href="#" id="viewtoggle"></a> to toggle function
			if (document.addEventListener){
				button.addEventListener('click', viewtoggle.toggle, true); 
			} else if (button.attachEvent){
				button.attachEvent('onclick', viewtoggle.toggle);
			}
		},
		toggle : function () {
			// If the site is mobile, show the full site, else show the mobile site
			mobile === true ? viewtoggle.showFull() : viewtoggle.showMobile(); 
			if (refresh == true) {
				document.location.reload(true);		
			}
			return false;
		},
		showFull: function () { // Show the full width site by changing the viewport
			viewport.setAttribute('content', 'user-scalable=yes, width=' + fullwidth + ';');
			mobile = false;
			localStorage.isResponsive = 'false'; // Update stored variable
			button.innerHTML = labelMobile;
		},
		showMobile: function () { // Show the mobile site
			viewport.setAttribute('content', 'initial-scale=1.0, maximum-scale=1.0, width=device-width;');
			mobile = true;
			localStorage.isResponsive = 'true';
			button.innerHTML = labelFull;			
		}
	}
	
	viewtoggle.load(); // Run load function on document load
	
	return viewtoggle;
}(window));