/**
 * Created by Andrew George on 3/12/14.
 * http://www.teknee.com
 *
 *
 */
(function ($){

    function Reveal (element) {
        this.$element = $(element);
        this.$cover = this.$element.find('.reveal-cover');
        this.$content = this.$element.find('.reveal-content');
        this.height = 0;
        this.$element.on('mouseenter', $.proxy(this.show, this));
        this.$element.on('mouseleave', $.proxy(this.hide, this));
    }

    Reveal.prototype.init = function () {
        this.$cover.fadeIn();
        this.$content.height(this.$cover.height());
    };

    Reveal.prototype.show = function () {
        this.$element.trigger('show.bs.reveal');
        this.$cover.fadeOut();
    };

    Reveal.prototype.hide = function () {
        this.$element.trigger('hide.bs.reveal');
        this.$cover.fadeIn();
    };

    $.fn.reveal = function () {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('tek.reveal');

            if (!data) {
                $this.data('tek.reveal', new Reveal(this).init());
            }
        })
    }
}(jQuery));

