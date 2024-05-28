# Scrollen durch Klick auf Bilder

<!-- TOC -->
* [Scrollen durch Klick auf Bilder](#scrollen-durch-klick-auf-bilder)
  * [Zum Ende der Seite](#zum-ende-der-seite)
  * [Zu bestimmtem Element](#zu-bestimmtem-element)
<!-- TOC -->

## Zum Ende der Seite

Gehe zu den Seiten-Trackingoptionen der Seite, wo du das Scroll-Verhalten haben möchtest.
Klicke: `Seite > Drei Punkte > Tracking Code`.

Füge im Reiter `Head` den folgenden Code ein und ersetze `BILD_URL` mit der Bild-Adresse, die du aus dem
Live-Funnel kopieren kannst.

**Achtung: Anführungszeichen beibehalten!**

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.0.0/scripts/clickToScroll.js"></script>

<script>
function psca_clickToScroll_init() {
    psca_scrollToBottomOnImageClick("BILD_URL")
}
</script>
```

## Zu bestimmtem Element

Gehe zu den Seiten-Trackingoptionen der Seite, wo du das Scroll-Verhalten haben möchtest.
Klicke: `Seite > Drei Punkte > Tracking Code`.

Füge im Reiter `Head` den folgenden Code ein, ersetzte `IMAGE_URL` und ersetze `SCROLL_TO_ELEMENT_SELECTOR` durch einen sogenannten CSS-Selektor ersetzen.

**Achtung: Anführungszeichen beibehalten!**

Der CSS-Selektor muss das Element, zu dem gescrollt werden soll, eindeutig bestimmen.

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.0.0/scripts/clickToScroll.js"></script>

<script>
function psca_clickToScroll_init() {
    psca_scrollToElementOnImageClick("BILD_URL", "SCROLL_TO_ELEMENT_SELECTOR")
}
</script>
```

Für Elemente, die eine ID haben, benutze: `*[id='ELEMENT_ID']`: 

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.0.0/scripts/clickToScroll.js"></script>

<script>
function psca_clickToScroll_init() {
    psca_scrollToElementOnImageClick("BILD_URL", "*[id='ELEMENT_ID']")
}
</script>
```
