import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTicket() {
      var params = {
        students: this.get('students'),
        location: this.get('location'),
        problem: this.get('problem'),
      };
      this.sendAction('saveTicket', params);
    }
  }
});
