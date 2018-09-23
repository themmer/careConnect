import Component from '@ember/component';
import { stateShort } from '../enumerations/states';

const search = {
  name: 'CHI Health',
  city: 'Omaha',
  state: 'NE',
  zipCode: 68130,
  mileRadius: 10
};

export default Component.extend({
  search,

  step: 1,

  states: stateShort,

  actions: {
    onSubmit() {
      this.set('errors', null);
      // TODO
    },
    onCancel() {
      history.back();
    },
    submitStep() {
      this.set('step', this.get('step') + 1);
    }
  }
});
