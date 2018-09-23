import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['right-spacer-half'],

  tagName: 'span',

  // currentUser: service(),
  store: service(),

  // Provided - user being added or removed from favorites
  favoriteUser: true,

  // Provided
  favorite: null,

  isFavorite: computed('favoriteUser', 'favorite', {
    get() {
      let favorite = this.get('favorite');

      return !!favorite;
    }
  }),

  actions: {
    toggleFavorite() {
      this.toggleProperty('favorite');
    }
  }
});
