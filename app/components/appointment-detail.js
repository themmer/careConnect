import Component from '@ember/component';

export default Component.extend({
  actions: {
    onCancel() {
      history.back();
    },
    onSubmit() {
      // TODO
    }
  }
});
