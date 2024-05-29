# Scroll by clicking on an image

<!-- TOC -->
* [Scroll by clicking on an image](#scroll-by-clicking-on-an-image)
  * [General](#general)
  * [Zu ersetzende Werte](#zu-ersetzende-werte)
  * [Variants](#variants)
    * [Scroll to the end of the page](#scroll-to-the-end-of-the-page)
    * [Scroll to the top of the page](#scroll-to-the-top-of-the-page)
    * [Scroll to any element](#scroll-to-any-element)
    * [Scroll to an element having an ID (like a button)](#scroll-to-an-element-having-an-id-like-a-button)
    * [Scroll to another image](#scroll-to-another-image)
  * [Scroll options](#scroll-options)
<!-- TOC -->

## General

⚠️ **Important Note:** The following sections provide you with code templates.

These always have to be inserted into the page option "Tracking Code" of the corresponding page,
where you want to achieve the scrolling behavior.

Click: `Page > Three Dot Menu > Tracking Code`.

⚠️ **Second Note**: If you shall replace values, always **keep quotations marks**!

## Zu ersetzende Werte

| Wert                     | Beschreibung                                                      |
|--------------------------|-------------------------------------------------------------------|
| `CLICK_IMAGE_URL`        | Address/URL of the image that shall start the scrolling on click. |
| `SCROLL_TO_CSS_SELECTOR` | Generic CSS selector identifying the element to scroll to.        |
| `SCROLL_TO_ELEMENT_ID`   | ID of a specific element to scroll to.                            |
| `SCROLL_TO_IMAGE_URL`    | Address/URL of the image to scroll to.                            |

## Variants

### Scroll to the end of the page

```html

<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll("CLICK_IMAGE_URL", "bottom", { offset: 0, position: "center"})
    }
</script>
```

### Scroll to the top of the page

```html

<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll("CLICK_IMAGE_URL", "top", { offset: 0, position: "center"})
    }
</script>
```

### Scroll to any element

```html

<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll("CLICK_IMAGE_URL", "SCROLL_TO_CSS_SELECTOR", { offset: 0, position: "center"})
    }
</script>
```

### Scroll to an element having an ID (like a button)

```html

<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll("CLICK_IMAGE_URL", "*[id='SCROLL_TO_ELEMENT_ID']", { offset: 0, position: "center"})
    }
</script>
```

### Scroll to another image

```html

<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
  function psca_clickToScroll_init() {
    psca_clickToScroll("CLICK_IMAGE_URL", "SCROLL_TO_IMAGE_URL", { offset: 0, position: "center"})
  }
</script>
```

## Scroll options

In the code example there is always the following:

```
... { offset: 0, position: "center"} ...
```

These are the scroll options:

- `offset`:
  - Positive Zahl: Scrollt um `{offset}` Pixel weiter nach oben.
  - Negative Zahl: Scrollt um `{offset}` Pixel weniger weiter nach oben.
- `position`:
  - Bestimmt, wo das Element, zu dem gescrollt werden soll, am Ende des Scrollens im Fenster positioniert sein soll.
  - Mögliche Werte:
    - `top`
    - `center`
    - `bottom`
