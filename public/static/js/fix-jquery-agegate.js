jQuery.fn.load = function (callback) { $(window).trigger('load', callback) }
jQuery.fn.bind = function (callback) { $(window).trigger('on', callback) }
jQuery.fn.unbind = function (callback) { $(window).trigger('off', callback) }
