(function() {
    function a(e, f) {
        var c = "https://static.wowhead.com/widgets/searchbox/searchbox.html";
        var d = '<iframe src="' + c + '" width="' + e + '" height="' + f + '" frameborder="0" class="wowhead-searchbox"';
        d += "></iframe>";
        document.write(d)
    }
    function b() {
        var c = {"160x200": {width: 160, height: 200}, "160x120": {width: 160, height: 120}, "120x200": {width: 120, height: 200}, "120x120": {width: 120, height: 120}, "150x120": {width: 150, height: 120}};
        var d;
        if (typeof wowhead_searchbox_format != "undefined") {
            if (c[wowhead_searchbox_format]) {
                d = c[wowhead_searchbox_format]
            }
        }
        if (!d) {
            d = c["160x200"]
        }
        a(d.width, d.height)
    }
    b()
})();