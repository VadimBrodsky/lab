// Require the CSS as any other JS module
import 'todomvc-app-css/index.css';

import View from './view';
import {log} from './helpers';
import Controller from './controller';
import Model from './model';
import Store from './store';
import Template from './template';

/**
 * Sets up a brand new Todo list.
 *
 * @param {string} name The name of your new to do list.
 */
function Todo(name) {
  this.storage = new app.Store(name);
  this.model = new app.Model(this.storage);
  this.template = new app.Template();
  this.view = new app.View(this.template);
  this.controller = new app.Controller(this.model, this.view);
}

export function onLoad() {
  const todo = new Todo('todos-vanillajs');
  todo.controller.setView(document.location.hash);
  log('view set');
}
