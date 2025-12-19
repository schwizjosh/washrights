var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(function(a){a.fn.extend(window.WPD.ajaxsearchlite.plugin,{showVerticalResults:function(){this.showResultsBox();if(0<this.n("items").length){let b=this.n("items").length<this.o.itemscount?this.n("items").length:this.o.itemscount;b=0>=b?9999:b;let h=a(".asl_group_header",this.n("resultsDiv"));if(0==this.o.itemscount||this.n("items").length<=this.o.itemscount)this.n("results").css({height:"auto"});else if(1>this.call_num&&this.n("results").css({height:"30px"}),1>this.call_num){let c=0,d=0,e=0,g=0;this.n("items").forEach(function(){d+=
a(this).outerHeight(!0);a(this).outerHeight(!0)>g&&(g=a(this).outerHeight(!0));c++});e=g*b;e>d&&(e=d);c=1>c?1:c;d=d/c*b;0<h.length&&h.forEach(function(f,k){f=Array.prototype.slice.call(f.parentNode.children).indexOf(f);f-k-Math.floor(f/3)<b&&(e+=a(this).outerHeight(!0))});this.n("results").css({height:e+"px"})}this.n("items").last().addClass("asl_last_item");this.n("results").find(".asl_group_header").prev(".item").addClass("asl_last_item");1==this.o.highlight&&a("div.item",this.n("resultsDiv")).highlight(this.n("text").val().split(" "),
{element:"span",className:"highlighted",wordsOnly:this.o.highlightWholewords})}this.resize();0==this.n("items").length&&this.n("results").css({height:"auto"});this.n("results").css({overflowY:"auto"});this.n("results").get(0).scrollTop=0;this.fixResultsPosition(!0);this.searching=!1}})})(WPD.dom);

}
/*
     FILE ARCHIVED ON 14:59:03 Nov 07, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:53:55 Dec 17, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.5
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 39.638
  LoadShardBlock: 117.286 (3)
  PetaboxLoader3.datanode: 168.146 (5)
  load_resource: 336.632
  PetaboxLoader3.resolve: 230.091
  loaddict: 56.353
*/