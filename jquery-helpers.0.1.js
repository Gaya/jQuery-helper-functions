/*
 jQuery helpers - a set of jQuery functions which are not included in the standard installation.
 Collected by: Gaya Kessler - http://www.gayadesign.com

 These functions:
 .disableSelection(selector) - disabled the text / images in the selected element to be selected
 .makeItWorkForIE(version) - fixes all your problems
*/
(function($){

//disableSelection
$.fn.disableSelection = function() {
    return this.each(function() {
        $(this).attr('unselectable', 'on')
               .css({
                   '-moz-user-select':'none',
                   '-webkit-user-select':'none',
                   'user-select':'none',
                   '-ms-user-select':'none'
               })
               .each(function() {
                   this.onselectstart = function() { return false; };
               });
    });
};

//fix for IE
$.fn.makeItWorkForIE = function(versions) {
    return this.each(function() {
        if ($.browser.msie && parseInt($.browser.version, 10) <= versions) {
            $(this).css({
                'display':'none'
            });
        }
    });
};

})(jQuery);