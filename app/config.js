"use strict";

Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: false,
  transition: 'slide',
  slideNumber: 'c / t',
  dependencies: [
    {
      src: 'reveal.js/lib/js/classList.js',
      condition: function() { return !document.body.classList; }
    },
    {
      src: 'reveal.js/plugin/highlight/highlight.js',
      condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); },
      async: true
    },
    {
      src: 'reveal.js/plugin/zoom-js/zoom.js',
      async: true
    },
    {
      src: 'reveal.js/plugin/notes/notes.js',
      async: true
    },
    {
      src: 'reveal.js/plugin/math/math.js',
      async: true
    }
  ]
});

