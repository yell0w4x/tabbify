// tabbify 0.0.1

(function tabControlPlugin($) {
    $.fn.tabbify = function(options) {
        var options = options || {};

        if (this.length > 1) {
            this.each(function() { $(this).tabbify(options); });
            return this;
        }

        var activeTabIndex = 0;
        var activeTabName = '';
        var activePane = null;

        var tabs = $(this).find('ul li > a');
        var panes = $(this).find('.tab-pane');
        var thiz = this;

        tabs.click(function(e) {
            tabs.removeClass('active');
            activeTabName = $(e.target).attr('href');

            tabs.each(function(i, item) {
                var tabName = $(item).attr('href');

                if (e.target == item) {
                    activeTabIndex = i;
                    $(e.target).addClass('active');
                } else {
                    var pane = $(tabName);
                    if (pane.length == 0) {
                        pane = $(panes[i]);
                    }

                    pane.removeClass("active");
                    pane.css("display", "none");
                }
            });

            activePane = $(activeTabName);
            if (activePane.length == 0) { activePane = $(panes[activeTabIndex]); }
            activePane.fadeIn();

            callOnChange.call(thiz);

            return false;
        });

        function callOnChange() {
            if (options.onChange) {
                options.onChange.call(this, activeTabIndex, tabs, panes);
            }
        }

        this.prev = function() {
            if (activeTabIndex > 0) {
                tabs[--activeTabIndex].click();
            }

            return thiz;
        };

        this.next = function() {
            if (activeTabIndex < tabs.length) {
                tabs[++activeTabIndex].click();
            }

            return thiz;
        };

        this.changeTab = function(selector) {
            if ($.type(selector) === 'number') {
                if (selector < tabs.length && selector >= 0) {
                    tabs[selector].click();
                }
            } else if ($.type(selector) === 'string') {
                $(thiz).find(selector).click();
            } else if ($.type(selector) === 'object') {
                selector.click();
            }

            return thiz;
        };

        this.selectedTabIndex = function() { return activeTabIndex; };
        this.tabs = function() { return tabs; };
        this.panes = function() { return panes; };
        this.isFirst = function() { return activeTabIndex == 0; };
        this.isLast = function() { return activeTabIndex == tabs.length - 1; };

        return this;
    }
})(jQuery);
