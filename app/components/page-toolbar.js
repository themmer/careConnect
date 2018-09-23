import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  /**
   * The router.
   *
   * @private
   * @property routerService
   * @type {Object}
   */
  routerService: service('-routing'),

  routes: computed('routerService.currentRouteName', {
    get() {
      const currentRouteName = this.get('routerService.currentRouteName');
      let routes = currentRouteName.split('.');
      // remove certain keywords not wanted in the breadcrumb
      routes = routes.filter(route => {
        return route != 'index' && route != 'search' && route != 'users' && route != 'user' && route != 'me';
      });
      return routes;
    }
  }),

  route: computed('routes', {
    get() {
      const routes = this.get('routes');
      return routes[0];
    }
  }),

  subRoute: computed('routes', {
    get() {
      const routes = this.get('routes');
      return routes[1];
    }
  }),

  actions: {
    /**
     * Handles the intent to sign out of the current session.
     *
     * @private
     * @function onLogout
     */
    // onLogout() {
    //   this.get('session').invalidate();
    //   this.get('routerService.router').transitionTo('index');
    // },
    /**
     * Go to route from breadcrumb selection
     */
    goUpToRoute(goUpToRoute) {
      const currentRouteName = this.get('routerService.currentRouteName');
      const indexOf = currentRouteName.indexOf(goUpToRoute);
      const newRoute = `${currentRouteName.substring(0, indexOf)}${goUpToRoute}`;
      this.container.lookup('controller:application').transitionToRoute(newRoute);
    },
    /**
     * Go to dashboard - Home is clicked
     */
    goToHome() {
      this.get('routerService.router').transitionTo('index');
    }
  }
});
