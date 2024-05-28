# Scroll on image clicks

<!-- TOC -->
* [Scroll on image clicks](#scroll-on-image-clicks)
  * [To the end of the page](#to-the-end-of-the-page)
  * [To a specific element](#to-a-specific-element)
<!-- TOC -->

## To the end of the page

Go to the page tracking options of the page, where you want to implement the scroll behavior.
Click: `Page > Three Dot Menu > Tracking Code`.

In the tab `Head`, add the following code and replace `IMAGE_URL` with the image URL/address you can copy
from the live funnel (right click, "copy image address").

**Attention: Keep the quotation marks!**

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.0.0/scripts/clickToScroll.js"></script>

<script>
function psca_clickToScroll_init() {
    psca_scrollToBottomOnImageClick("IMAGE_URL")
}
</script>
```

## To a specific element

Go to the page tracking options of the page, where you want to implement the scroll behavior.
Click: `Page > Three Dot Menu > Tracking Code`.

In the `Head` tab, add the following code, replace `IMAGE_URL`, and replace `SCROLL_TO_ELEMENT_SELECTOR` by a so-called CSS selector.

**Attention: Keep the quotation marks!**

The CSS selector must uniquely identify the element that you want to scroll to.

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.0.0/scripts/clickToScroll.js"></script>

<script>
function psca_clickToScroll_init() {
    psca_scrollToElementOnImageClick("IMAGE_URL", "SCROLL_TO_ELEMENT_SELECTOR")
}
</script>
```

For elements that have IDs, use: `*[id='ELEMENT_ID']`:

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.0.0/scripts/clickToScroll.js"></script>

<script>
function psca_clickToScroll_init() {
    psca_scrollToElementOnImageClick("IMAGE_URL", "*[id='ELEMENT_ID']")
}
</script>
```
