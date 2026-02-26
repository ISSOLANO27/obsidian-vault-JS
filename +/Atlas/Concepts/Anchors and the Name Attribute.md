Early web pages did not support the use of the `id` attribute as a way of **marking location within a document.**

Instead,

they used` <a>` tags as an anchor to mark the page location.
#OlderVersionOfHTML 

The general form was:
```html
<a name="anchor">content</a>
```
Where, `anchor` is the name given to the anchored text.

### No Content Was Needed
Inserting content within the `<a>` tag was optional since the primary reason of the tag was to mark a document location, not to mark up content.

This code would establish as anchor at the start of the lunch section in the Curbside Thai full menu:
```html
<h2><a name="lunch">Lunch Menu</h2>
```

---
Once the anchor had been set, you would link to the anchor using the same syntax you would use with [[Linking to an Id]].

The use of anchors is a deprecated feature of HTML and is not supported in strict applications of XHTML, but will still see anchors used in older websites. #oldCodeNeverDies #OlderVersionOfHTML 