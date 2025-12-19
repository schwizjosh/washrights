var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
fetch( viewsCacheL10n.admin_ajax_url, {
	method: "POST",
	credentials: 'same-origin',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Cache-Control': 'no-cache',
	},
	body: new URLSearchParams(
		{
			action: 'postviews',
			nonce: viewsCacheL10n.nonce,
			postviews_id: viewsCacheL10n.post_id,
			cache: !1,
		}
	),
})
.then(function(response) {
	return response.json();
})
.then(function(data) {
})
.catch(function(error) {
	console.log('WP-PostViews');
	console.log(error);
});

}
/*
     FILE ARCHIVED ON 03:33:16 Mar 12, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:53:53 Dec 17, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.55
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 22.14
  LoadShardBlock: 92.383 (3)
  PetaboxLoader3.datanode: 208.962 (5)
  load_resource: 175.373
  PetaboxLoader3.resolve: 51.395
  loaddict: 48.338
*/