# Scrollen durch Klick auf Bilder

<!-- TOC -->
* [Scrollen durch Klick auf Bilder](#scrollen-durch-klick-auf-bilder)
  * [Allgemeines](#allgemeines)
  * [Zu ersetzende Werte](#zu-ersetzende-werte)
  * [Varianten](#varianten)
    * [Zum Ende der Seite scrollen](#zum-ende-der-seite-scrollen)
    * [Zum Anfang der Seite scrollen](#zum-anfang-der-seite-scrollen)
    * [Zu bestimmtem Element scrollen](#zu-bestimmtem-element-scrollen)
    * [Zu Element mit ID (wie Button) scrollen](#zu-element-mit-id-wie-button-scrollen)
    * [Zu anderem Bild scrollen](#zu-anderem-bild-scrollen)
  * [Scroll-Optionen](#scroll-optionen)
<!-- TOC -->

## Allgemeines

⚠️ **Wichtiger Hinweis:** In den folgenden Abschnitten siehst du Code-Vorlagen.

Diese sind immer unter der Seitenoption "Tracking Code" der jeweiligen Seite, auf der du
das Scroll-Verhalten haben möchtest, einzufügen.

Klicke: `Seite > Drei Punkte > Tracking Code`.

⚠️ **Zweiter Hinweis**: Wenn du Werte ersetzen sollst, immer die **Anführungszeichen beibehalten**!

## Zu ersetzende Werte

| Wert                     | Beschreibung                                                                            |
|--------------------------|-----------------------------------------------------------------------------------------|
| `CLICK_IMAGE_URL`        | Adresse/URL des Bildes, dass das Scrollen auf Klick starten soll.                       |
| `SCROLL_TO_CSS_SELECTOR` | Ein generischer CSS Selector, der das Element beschreibt, zu dem gescrollt werden soll. |
| `SCROLL_TO_ELEMENT_ID`   | ID eines spezifischen, zu dem gescrollt werden soll.                                    |
| `SCROLL_TO_IMAGE_URL`    | Adresse/URL des Bildes, zu dem gescrollt werden soll.                                   |

## Varianten

### Zum Ende der Seite scrollen

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll(
            "CLICK_IMAGE_URL",
            "bottom",
            { offset: 0, position: "center" }
        );
    }
</script>
```

### Zum Anfang der Seite scrollen

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll(
            "CLICK_IMAGE_URL",
            "top",
            { offset: 0, position: "center" }
        );
    }
</script>
```

### Zu bestimmtem Element scrollen

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll(
            "CLICK_IMAGE_URL",
            "SCROLL_TO_CSS_SELECTOR",
            { offset: 0, position: "center" }
        );
    }
</script>
```

### Zu Element mit ID (wie Button) scrollen

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll(
            "CLICK_IMAGE_URL",
            "*[id='SCROLL_TO_ELEMENT_ID']",
            { offset: 0, position: "center" }
        );
    }
</script>
```

### Zu anderem Bild scrollen

```html
<script src="https://cdn.jsdelivr.net/gh/Perspective-Software/community-assets@1.1.0/scripts/clickToScroll.js"></script>

<script>
    function psca_clickToScroll_init() {
        psca_clickToScroll(
            "CLICK_IMAGE_URL",
            "SCROLL_TO_IMAGE_URL",
            { offset: 0, position: "center" }
        );
    }
</script>
```

## Scroll-Optionen

In den Code-Beispielen findet man immer wieder das hier:

```
... { offset: 0, position: "center"} ...
```

Das sind die Scroll-Optionen:

- `offset`:
  - Positive Zahl: Scrollt um `{offset}` Pixel weiter nach oben.
  - Negative Zahl: Scrollt um `{offset}` Pixel weniger weiter nach oben.
- `position`:
  - Bestimmt, wo das Element, zu dem gescrollt werden soll, am Ende des Scrollens im Fenster positioniert sein soll.
  - Mögliche Werte:
    - `top`
    - `center`
    - `bottom`
