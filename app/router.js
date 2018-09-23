import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('profile');
  this.route('favorites', function() {
    this.route('me');
  });
  this.route('calendar');
  this.route('schedule');
  this.route('notifications');
  this.route('messages');
  this.route('forms');
  this.route('providers');
  this.route('appointment-view');
  this.route('wait-time');
});

export default Router;
