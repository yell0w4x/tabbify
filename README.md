# tabbify jQuery plugin

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


![tabbify](https://user-images.githubusercontent.com/43479456/64606755-a7e4ee00-d3cf-11e9-9169-571364a5ce7c.png)

`ul` element specifies tabs and `div` with `panes` class defines panels. You can either use `id` and `href` 
attributes to link up tabs with panes together or just leave it blank. In latter zero based index is used to make things work.
Use predefined css or define your own rules to make desired appearance.

```html
<link rel="stylesheet" href="/tabbify/dist/tabbify.min.css">
```
```html
<script src="/tabbify/dist/tabbify.min.js"></script>
```

```html
<div id="tabs" class="tabs">
    <ul>
        <li><a href="#" class="active">Foreword</a></li>
        <li><a href="#">Main</a></li>
        <li><a href="#afterword">Afterword</a></li>
    </ul>

    <div class="panes">
        <div class="tab-pane active">
            <h1>Foreword</h1>
        </div>

        <div class="tab-pane">
            <h1>Main</h1>
        </div>
        
        <div class="tab-pane" id="#afterword">
            <h1>Afterword</h1>
        </div>
    </div>
</div>

<script>
$(function() {
    var tabs = $('#tabs').tabbify({onChange: function(index) { alert(index); } });
    tabs.next();
});
</script>
```

## Options

* onChange(activeTabIndex, tabs, panes)

    - this - jQuery wrapper on the element passed to tabbify, the same object returned by tabbify() and API accessible through.
    - activeTabIndex - Index of the currently active tab beginnig from zero after change occurs.
    - tabs - `ul > li > a` jQuery tabs collection.
    - panes - `.tab-pane` jQuery panes collection.

## API

* prev() - Select previous tab
* next() - Select next tab
* changeTab(selector) - Select a tab designated by `selector`. Selector can be
  tab index, dom selector string or jquery object. It's assumed the object or
  string designates `ul > li > a` element(s).
* tabs() - `ul > li > a` jQuery tabs collection.
* panes() - `.tab-pane` jQuery panes collection.
* isFirst() - whether first tab selected.
* isLast() - whether last tab selected.

First three also return tabbify api object so calls can be chained like `tabs.next().next()`.

## Provided without warranty under the MIT license
