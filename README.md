# ig-furniture

## Install

`bower install --save https://github.com/ft-interactive/ig-furniture.git`

## Footer view

In your HTML:

```html
<footer class="ig-furniture"></footer>
```

In your JavaScript:

```javascript
var Footer = require('ig-furniture/footer');

var footer = new Footer({
  el: $('.ig-footer')[0],
  credits: app.data.credits,
  footnotes: ['Some footnote string']
});

footer.render();
```

In your SCSS:

```scss
@import 'ig-furniture/footer/style';
```

Notes:

- CSS classes are in BEM style, with `ig-furniture__` used as a prefix for all descendent selectors.
  - You can also add any of these modifier classes to the container element: `ig-footer--right`, `ig-footer--no-border`, `ig-footer--single-deck`
