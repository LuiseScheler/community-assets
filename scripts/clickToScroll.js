function psca_scrollOnClick(cssSelector, scrollTo = "!bottom") {
    const observedElements = [];

    function executeScrollAction() {
        if ( scrollTo === "!bottom" ) {
            window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});
        } else if ( scrollTo === "!top" ) {
            window.scrollTo({top: 0, behavior: "smooth"});
        } else {
            const element = document.querySelector(scrollTo);
            if ( element ) {
                element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
        }
    }

    function registerClickListener(element) {
        element.style.cursor = "pointer";
        element.addEventListener('click', () => {
            executeScrollAction()
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

function psca_extractImagePathname(value) {
    try {
        const url = new URL(value)
        return url.pathname
    } catch (e) {
        return value
    }
}

function psca_scrollToBottomOnImageClick(imageUrl) {
    psca_scrollOnClick("img[src*='" + psca_extractImagePathname(imageUrl) + "']", "!bottom")
}

function psca_scrollToElementOnImageClick(imageUrl, elementSelector) {
    psca_scrollOnClick("img[src*='" + psca_extractImagePathname(imageUrl) + "']", elementSelector)
}

function psca_checkInit() {
    if ( typeof window["psca_clickToScroll_init"] === "function" ) {
        window.psca_clickToScroll_init()
    } else {
        setTimeout(checkInit, 500)
    }
}

psca_checkInit()
