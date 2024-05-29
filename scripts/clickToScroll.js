(function() {
    function _psca_setup_scrollToClick(cssSelector, scrollTo, options = { offset: 0, position: "center"}) {
        const observedElements = [];

        function executeScrollAction() {
            let targetTop = 0;

            if ( scrollTo === "bottom" ) {
                targetTop = document.body.scrollHeight;
            } else if ( scrollTo === "top" ) {
                document.body.scrollHeight = 0;
            } else {
                const element = document.querySelector(scrollTo);
                const elementRect = element.getBoundingClientRect();
                const elementHeight = elementRect.height;
                const elementTop = elementRect.top;

                const windowHeight = window.innerHeight;

                if ( options.position === "top" ) {
                    targetTop = window.scrollY + elementTop;
                } else if ( options.position === "center" ) {
                    targetTop = window.scrollY + elementTop - ((windowHeight - elementHeight) / 2);
                } else if ( options.position === "bottom" ) {
                    targetTop = window.scrollY + elementTop - (windowHeight - elementHeight);
                }
            }

            window.scrollTo({top: targetTop + options.offset, behavior: "smooth"});
        }

        function registerClickListener(element) {
            element.style.cursor = "pointer";
            element.addEventListener('click', () => {
                executeScrollAction();
            });
        }

        function observeNewElements() {
            const elements = Array.from(document.querySelectorAll(cssSelector));
            const newElements = elements.filter(element => !observedElements.includes(element));
            newElements.forEach(registerClickListener);
            observedElements.push(...newElements);
        }

        observeNewElements();
        setInterval(() => {
            observeNewElements();
        }, 500);
    }

    function _psca_createImageUrlSelectorOrReturn(imageUrlOrCssSelector) {
        try {
            const url = new URL(imageUrlOrCssSelector);
            return "img[src*='" + url.pathname + "']";
        } catch (e) {
            return imageUrlOrCssSelector;
        }
    }

    function psca_clickToScroll(clickTarget, scrollTarget, options = { offset: 0, position: "center"}) {
        _psca_setup_scrollToClick(
            _psca_createImageUrlSelectorOrReturn(clickTarget),
            _psca_createImageUrlSelectorOrReturn(scrollTarget),
            options
        );
    }

    // Expose functions
    window.psca_clickToScroll = psca_clickToScroll;

    let _psca_checkInit_interval = undefined;

    function _psca_checkInit() {
        if ( typeof window["psca_clickToScroll_init"] === "function" ) {
            window.psca_clickToScroll_init();

            clearInterval(_psca_checkInit_interval);
            _psca_checkInit_interval = undefined;
        } else {
            _psca_checkInit_interval = setInterval(_psca_checkInit, 500)
        }
    }

    _psca_checkInit();
})();
