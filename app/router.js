import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('groups', function() {
    this.route('list');
    this.route('new');
    this.route('view', {path: '/:group_id'});
    this.route('edit', {path: '/edit/:group_id'});
  });
});

export default Router;
