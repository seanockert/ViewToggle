# ViewToggle #

Adds a link to a responsive site to force viewing the full website. [Demo here](http://seanockert.github.com/ViewToggle/): 
## Overview
ViewToggle adds a link to _View full site_. This overrides the viewport of the webpage to force mobiles to serve up the full website view instead of the mobile optimised version. This is useful for managing user expectations as [discussed here](http://www.elezea.com/2012/09/responsive-design-expectations/).

It is inspired by [this post](http://creativeandcode.com/responsive-view-full-site )

ViewToggle uses local storage to remember which viewport you selected for subsequent visits (mobile or full site). 

The link is hidden on IE7 and lower.

## Basic use

Download and reference viewtoggle.js from your document. Just before the closing `</body>` tag is good
    
    	<script src="viewtoggle.js"></script>
	
Set your viewport to scale with the device:

	<meta name="viewport" content="width=device-width">	

Then give an ID of `viewtoggle` to the element you want to use as your _View full site_ button. A good place to put this is in the footer of your page.
	<a href="#" id="viewtoggle">View full site</a>

That's it really! On your mobile site, clicking this link will switch to the full version by changing the viewport to a width of 980px. Clicking the link again will revert back to the default viewport.

## Options

* `labelMobile = 'View mobile site' // Label to return to the mobile view`
* `refresh = true // Set this to true to force the page to refresh after the button is pressed. Use if you need to load background images that are defined in a different media query`
* `fullwidth = 980 // Full site page width`

## Issues

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
    

## License
Feel free to do what you like with it!
 
