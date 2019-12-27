// =======================================================================================================
// Help.js
// =======================================================================================================
$(document).ready(function() {
    sel = $("P.MsoToc1 > a,P.MsoToc2 > a,P.MsoToc3 > a");
    sel.attr('title', "Click to jump directly to this topic...");
    sel.click(function() {
        scrollToElement(this.hash.replace('#', ''));
    });
    // Scroll the selected topic into view adjusting for the header bar.
    function scrollToElement(elId) {
        document.getElementsByName(elId)[0].scrollIntoView(true);
        if ($(window).height() + $(window).scrollTop() !== $(document).height()) {
            $('html, body').animate({
                scrollTop: "-=56"
            }, "fast");
        }
    };

    $("#help_btnScrollToTop, .li2 > a").on("click", function() {
        //window.scrollTo(0,380);
        scrollToElement("TOC");
    });

});