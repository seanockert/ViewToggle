# ViewToggle #

A simple, framework-independent, link to view the full site for visitors who want to see the desktop version of your responsive webpage. Demo here: http://seanockert.github.com/ViewToggle/

License: Open-source. Feel free to do whatever you like with it!

Copyright 2012: Sean Ockert (http://balsamade.com) 

## Overview
ViewToggle changes the viewport of the page when a 'view full site' link is clicked on a responsively design website to force mobiles to serve up the full website instead of the mobile optimised version. It is heavily inspired by this post: http://creativeandcode.com/responsive-view-full-site/.

ViewToggle uses local storage to remember the viewport on the previous visit (mobile or full site). 

## Basic use

Download and reference viewtoggle.js from your document. Just before the closing `</body>` tag is good
    
    	<script src="viewtoggle.js"></script>
	
Set your viewport to scale with the device:

	<meta name="viewport" content="width=device-width">	

Then give an ID of `viewtoggle` to the element you want to use as your View Full Site button. A good place to put this is in the footer of your page.
	<a href="#" id="viewtoggle">View full site</a>

That's it really! On your mobile site, clicking this link will switch to the full version by changing the viewport to a width of 980px. If your full site is of a different width simply change this value. Clicking it again will revert back to the default viewport

## Options

* `labelMobile = 'View mobile site' // Label to return to the mobile view`
* `refresh = true // Set this to true to force the page to refresh after the button is pressed. Use if you need to load background images that are defined in a different media query`
* `fullwidth = 980 // Full site page width`

## Issues

- On some sites, the page doesn't automatically zoom out to fit the window when the 'view full site' link is clicked
- Local Storage is not supported in every browser. We could detect for it and remove the button using the following:

    if (!viewtoggle.hasSupport()) {
        button.parentNode.removeChild(button);  // Hide the button if no localstorage support. A bit drastic but the browsers we care about should support it
    }
    
    hasSupport: function() { // Only needed for IE browsers to check localstorage support	
        try {		
            return 'localStorage' in window && window['localStorage'] !== null;			
        } catch (e) {			
            return false;
        }		
    }