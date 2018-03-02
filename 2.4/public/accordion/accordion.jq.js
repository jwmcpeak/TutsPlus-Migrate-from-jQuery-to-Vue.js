(function($) {
    
    var methods = {
        init: function(options) {
            var settings = $.extend({}, $.fn.accordion.defaults, options);

            this.addClass('accordion');
        
            this.find('h3')
                .addClass('accordion-header')
                .next()
                .addClass('accordion-panel');
       
            this.on('click', '.accordion-header', function(e) {
                var next = $(e.target).next();
                var isActive = next.attr('data-active');

                if (isActive) {
                    next.removeAttr('data-active');
                } else {
                    next.attr('data-active', true);                
                }
                
            });
            
            return this;
        }
    };
    
    $.fn.accordion = function(options) {
        return methods.init.call(this, options);
    };
    
    
    $.fn.accordion.defaults = {};

}(jQuery));