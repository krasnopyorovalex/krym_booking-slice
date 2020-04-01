(function() {

    'use strict';

    window.$ = function(target) {

        const slideDown = (duration = 500) => {
            target.style.removeProperty('display');
            let display = window.getComputedStyle(target).display;

            if (display === 'none') {
                display = 'block';
            }

            target.style.display = display;
            let height = target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = 0;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.boxSizing = 'border-box';
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + 'ms';
            target.style.height = height + 'px';
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            window.setTimeout( () => {
                target.style.removeProperty('height');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
            }, duration);
        };

        const slideUp = (duration = 500) => {
            target.style.transitionProperty = 'height, margin, padding';
            target.style.transitionDuration = duration + 'ms';
            target.style.boxSizing = 'border-box';
            target.style.height = target.offsetHeight + 'px';
            target.offsetHeight;
            target.style.overflow = 'hidden';
            target.style.height = 0;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout( () => {
                target.style.display = 'none';
                target.style.removeProperty('height');
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
            }, duration);
        };

        const fadeOut = () => {
            let opacity = 1;

            let timer = setInterval(function() {

                if(opacity <= 0.01) {

                    clearInterval(timer);
                    target.style.display = "none";

                }

                target.style.opacity = opacity;

                opacity -= opacity * 0.1;

            }, 10);
        };

        const fadeIn = () => {
            let opacity = 0.01;

            target.style.display = "block";

            let timer = setInterval(function() {

                if(opacity >= 1) {

                    clearInterval(timer);

                }

                target.style.opacity = opacity;

                opacity += opacity * 0.5;

            }, 10);
        };

        /**
         * Returns init and goToTab
         */
        return {
            slideDown: slideDown,
            slideUp: slideUp,
            fadeIn: fadeIn,
            fadeOut: fadeOut
        };
    };
})();
