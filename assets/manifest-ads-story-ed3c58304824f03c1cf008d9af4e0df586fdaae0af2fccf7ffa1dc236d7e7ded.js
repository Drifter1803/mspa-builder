function refreshAnchorAd() {
    googletag.cmd.push(function() {
        googletag.pubads().refresh([anchorSlot])
    })
}
var anchorSlot, staticSlot, googletag = googletag || {};
googletag.cmd = googletag.cmd || [],
function() {
    var e = document.createElement("script");
    e.async = !0,
    e.type = "text/javascript";
    var o = "https:" == document.location.protocol;
    e.src = (o ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}(),
googletag.cmd.push(function() {
    if (anchorSlot = googletag.defineOutOfPageSlot("/17331515/Homestuck_Sticky_Footer_2021", googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR),
    staticSlot = googletag.defineSlot("/17331515/Homestuck_Desktop_Skyscraper_2021", [160, 600], "desktop_skyscraper").addService(googletag.pubads()),
    anchorSlot) {
        anchorSlot.addService(googletag.pubads()),
        googletag.pubads().enableSingleRequest(),
        googletag.enableServices(),
        googletag.cmd.push(function() {
            googletag.display(anchorSlot)
        });
        setInterval(refreshAnchorAd, 6e4)
    } else
        googletag.pubads().enableSingleRequest(),
        googletag.enableServices()
});
