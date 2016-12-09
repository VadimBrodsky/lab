/* global app, $on */
(function(window) {
  'use strict'

    console.log("hello worldz");

  $on(window, 'load', app.onLoad)
  $on(window, 'hashchange', app.onLoad)
})(window)
