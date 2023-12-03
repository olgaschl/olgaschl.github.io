function isFlashEnabled()
			{
				var hasFlash = true;
/*				try
				{
					var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
					if(fo) hasFlash = true;
				}
				catch(e)
				{
					if(navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;
				}
				return hasFlash;*/
			
			
var ua = window.navigator.userAgent;
var is_ie = /MSIE|Trident/.test(ua);

if(is_ie) {
	hasFlash = true;
} else {
	var is_ff = window.navigator.userAgent.includes('Firefox');
	if ( is_ff ) {
		hasFlash = false;
	}
}

return hasFlash;

			}